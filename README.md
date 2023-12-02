# HTML to GIF Converter (HTML2GIF)

HTML2GIF is a Node.js script that uses Puppeteer and ffmpeg to convert a webpage into a GIF. The script navigates to a webpage, takes screenshots at regular intervals, and then combines these screenshots into a GIF.

## Screenshot

## Prerequisites

- Node.js
- npm
- Puppeteer
- ffmpeg
- fluent-ffmpeg

## Installation

Before you begin, ensure you have met the following requirements:

1. Install Node.js and npm. You can download them from the official [Node.js website](https://nodejs.org/).
2. Clone the repository or download the `convert.js` file.
3. Navigate to the project directory and run `npm install puppeteer ffmpeg fluent-ffmpeg`.

```bash
npm install puppeteer @ffmpeg-installer/ffmpeg
```

## Usage

To use HTML2GIF, follow these steps:

1. Run the script in your terminal:

```bash
node convert.js
```

2. When prompted, enter the URL of the webpage you want to convert into a GIF.

The script will create a GIF of the webpage and save it in an 'Output' directory. The name of the GIF will be the title of the webpage.

## Customization

You can customize the script by modifying the following variables:

- `url`: The webpage to convert into a GIF.
- `outputPath`: The path where the GIF should be saved.
- `interval`: The interval between screenshots, in milliseconds.
- `duration`: The duration of the GIF, in milliseconds.

## Note

This is a basic implementation and might not work perfectly for all websites or scenarios. You might need to adjust the code based on your specific requirements. For example, you might need to add error handling, manage page navigation/loading, handle dynamic content/AJAX, etc. Also, keep in mind that creating a GIF from a large number of high-resolution screenshots might consume a lot of memory and CPU. You might need to optimize the code for performance based on your specific scenario.

## Contribution

If you want to contribute to HTML2GIF, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively, see the GitHub documentation on [creating a pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Acknowledgement

This project was made possible thanks to the following resources:

- [Node.js](https://nodejs.org/en/docs/): The runtime environment that allows us to run JavaScript on the server side.
- [Puppeteer](https://pptr.dev/): A Node.js library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default but can be configured to run full (non-headless) Chrome or Chromium.
- [fluent-ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg): A fluent API to [FFmpeg](https://ffmpeg.org/).
- [ffmpeg-installer](https://www.npmjs.com/package/@ffmpeg-installer/ffmpeg): An npm package that downloads FFmpeg binaries for the correct platform and includes them in your node_modules.
- [Stack Overflow](https://stackoverflow.com/): A platform for developers to learn and share their programming knowledge.

These resources provided the necessary documentation and guides that were instrumental in the development of this project. A big thank you to all the contributors of these resources! 😊

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
