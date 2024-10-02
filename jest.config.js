// jest.config.js
module.exports = {
  reporters: [
    "default",
    [
      "jest-html-reporter",
      {
        pageTitle: "Test Results",
        outputPath: "./test-report.html",
        includeFailureMsg: true,
        includeConsoleLog: true,
      },
    ],
  ],
};
