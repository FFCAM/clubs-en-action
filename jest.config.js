module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/components(.*)$": "<rootDir>/src/components$1",
    "^@/app(.*)$": "<rootDir>/src/app$1",
    "^@/utils(.*)$": "<rootDir>/src/utils$1",
    "^@/data(.*)$": "<rootDir>/src/data$1",
    "^@/public(.*)$": "<rootDir>/public$1",
    "^@/env$": "<rootDir>/__mocks__/env.ts",
    "^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": ["babel-jest", { configFile: "./babel.config.test.js" }],
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/_*.{ts,tsx}",
    "!src/**/index.{ts,tsx}",
    "!**/node_modules/**",
  ],
  testMatch: ["**/__tests__/**/*.test.{js,jsx,ts,tsx}"],
};
