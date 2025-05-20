module.exports = {
  ci: {
    collect: {
      startServerCommand: "pnpm start",
      url: ["http://localhost:3000"],
      numberOfRuns: 1,
      chromePath: process.env.CHROME_PATH, // utile pour GitHub Actions
      settings: {
        onlyCategories: ["accessibility", "best-practices", "seo"],
        preset: "desktop",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
