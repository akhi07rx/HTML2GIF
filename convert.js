const puppeteer = require("puppeteer");
const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegInstaller.path);
const fs = require("fs");
const path = require("path");
const readline = require("readline");
const ProgressBar = require("progress");

const CHROME_PATH =
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const isValidURL = (url) => {
  const regex =
    /(http|https):\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  return regex.test(url);
};

async function convertHTMLToGIF() {
  console.log("");
  console.log("Welcome to HTML2GIF");
  console.log(
    "Please provide the URL of the webpage you want to convert to a GIF:"
  );

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const url = await new Promise((resolve) => {
    rl.question("", (url) => {
      if (!isValidURL(url)) {
        console.error("Invalid URL provided. Please enter a valid URL.");
        return;
      }
      rl.close();
      resolve(url);
    });
  });

  const browser = await puppeteer.launch({
    headless: true,
    ignoreHTTPSErrors: true,
    executablePath: CHROME_PATH,
  });
  const page = await browser.newPage();
  await page.goto(url);
  await page.setViewport({ width: 3840, height: 2160, deviceScaleFactor: 3 });

  const title = (await page.title()).replace(/[<>:"/\\|?*]+/g, "_");
  const dir = path.join(__dirname, "Output", title);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const outputPath = path.join(dir, "output.gif");

  const interval = 100;
  const duration = 2000;
  const frameCount = duration / interval;

  const tempFilePath = path.join(dir, "output.tmp");

  const bar = new ProgressBar(":bar :percent", { total: frameCount });

  for (let i = 0; i < frameCount; i++) {
    await page.screenshot({ path: `${tempFilePath}-${i}.png`, type: "png" });
    await new Promise((resolve) => setTimeout(resolve, interval));
    bar.tick();
  }

  await browser.close();

  await new Promise((resolve, reject) => {
    ffmpeg()
      .input(`${tempFilePath}-%d.png`)
      .complexFilter("fps=30,palettegen")
      .output(`${tempFilePath}-palette.png`)
      .on("end", resolve)
      .on("error", reject)
      .run();
  });

  await new Promise((resolve, reject) => {
    ffmpeg()
      .input(`${tempFilePath}-%d.png`)
      .input(`${tempFilePath}-palette.png`)
      .complexFilter("fps=30 [x]; [x][1:v] paletteuse")
      .output(outputPath)
      .on("end", resolve)
      .on("error", reject)
      .run();
  });

  for (let i = 0; i < frameCount; i++) {
    fs.unlinkSync(`${tempFilePath}-${i}.png`);
  }
  fs.unlinkSync(`${tempFilePath}-palette.png`);

  console.log("GIF creation successful!");
}

convertHTMLToGIF();
