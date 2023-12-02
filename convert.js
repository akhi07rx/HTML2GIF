const puppeteer = require("puppeteer");
const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");
const path = require("path");

async function convertHTMLToGIF(url) {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath:
      "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", // your path to Chrome
  });
  const page = await browser.newPage();
  await page.goto(url);

  const title = await page.title();
  const dir = path.join(__dirname, title);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const outputPath = path.join(dir, "output.gif");

  const interval = 100;
  const duration = 1000;
  const frameCount = duration / interval;

  const tempFilePath = path.join(dir, "output.tmp");

  for (let i = 0; i < frameCount; i++) {
    await page.screenshot({ path: `${tempFilePath}-${i}.png` });
    await new Promise((resolve) => setTimeout(resolve, interval));
  }

  await browser.close();

  await new Promise((resolve, reject) => {
    ffmpeg()
      .input(`${tempFilePath}-%d.png`)
      .inputFPS(1 / (interval / 1000))
      .output(outputPath)
      .on("end", resolve)
      .on("error", reject)
      .run();
  });

  for (let i = 0; i < frameCount; i++) {
    fs.unlinkSync(`${tempFilePath}-${i}.png`);
  }
}

convertHTMLToGIF("https://www.google.com");
