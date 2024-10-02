// jest.config.js
module.exports = {
  testEnvironment: "node", // lub "jsdom", w zależności od twojego projektu
  setupFiles: ["<rootDir>/jest.setup.js"], // Ścieżka do pliku setup
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
  // inne opcje konfiguracyjne
};
