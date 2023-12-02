# HTML to GIF Converter (HTML2GIF)

This project provides a script to convert a webpage into a GIF using Puppeteer, ffmpeg, and Node.js.

## Prerequisites

- Node.js
- npm
- Puppeteer
- ffmpeg

## Installation

1. Install Node.js and npm. You can download them from the official [Node.js website](https://nodejs.org/).
2. Clone the repository or download the `convert.js` file.
3. Navigate to the project directory and run `npm install puppeteer ffmpeg`.

## Usage

1. Open the `convert.js` file in a text editor.
2. Replace `'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'` with the path to your Chrome executable.
3. Save and close the file.
4. Run the script with the command `node convert.js`.

The script will navigate to `https://www.google.com`, capture screenshots at an interval of 100 milliseconds for a duration of 1 second, and then use ffmpeg to stitch those screenshots into a GIF. The GIF will be saved as `output.gif` in the project directory.

## Customization

You can customize the script by modifying the following variables:

- `url`: The webpage to convert into a GIF.
- `outputPath`: The path where the GIF should be saved.
- `interval`: The interval between screenshots, in milliseconds.
- `duration`: The duration of the GIF, in milliseconds.

## Note

This is a basic implementation and might not work perfectly for all websites or scenarios. You might need to adjust the code based on your specific requirements. For example, you might need to add error handling, manage page navigation/loading, handle dynamic content/AJAX, etc. Also, keep in mind that creating a GIF from a large number of high-resolution screenshots might consume a lot of memory and CPU. You might need to optimize the code for performance based on your specific scenario.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
