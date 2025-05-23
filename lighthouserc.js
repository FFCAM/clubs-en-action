module.exports = {
  ci: {
    collect: {
      startServerCommand: "pnpm start",
      url: ["http://localhost:3000"],
      numberOfRuns: 1,
      chromePath: process.env.CHROME_PATH,
      settings: {
        formFactor: "desktop",
        screenEmulation: {
          mobile: false,
          width: 1350,
          height: 940,
          deviceScaleFactor: 1,
          disabled: false,
        },
        onlyCategories: ["accessibility", "best-practices", "seo"],
      },
    },
    assert: {
      preset: "lighthouse:recommended",
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
