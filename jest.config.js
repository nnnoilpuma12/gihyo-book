const nextJest = require("next/jest");
const createJestConfig = nextJest({ dir: "./" });
const customJestconfig = {
  testPathIgnorePatterns: ["<rootDir>/.next", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  testEnvironment: "jsdom",
};
module_exports = createJestConfig(customJestconfig);
