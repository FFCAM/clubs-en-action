module.exports = {
  preset: null,
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "^@/components(.*)$": "<rootDir>/src/components$1",
    "^@/app(.*)$": "<rootDir>/src/app$1",
    "^@/utils(.*)$": "<rootDir>/src/utils$1",
    "^@/public(.*)$": "<rootDir>/public$1",
    "^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|svg)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/",
    "<rootDir>/.vercel/",
    "<rootDir>/.wrangler/",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": ["babel-jest", { configFile: "./babel.config.test.js" }],
    "^.+\\.(js|jsx)$": ["babel-jest", { configFile: "./babel.config.test.js" }],
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/_*.{ts,tsx}",
    "!src/**/index.{ts,tsx}",
    "!**/node_modules/**",
  ],
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 40,
      lines: 30,
      statements: 30,
    },
  },
  verbose: true,
  testMatch: ["**/__tests__/**/*.test.{js,jsx,ts,tsx}"],
};
