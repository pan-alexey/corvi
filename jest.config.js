module.exports = {
  roots: [
    '<rootDir>/src',
    '<rootDir>/tests/e2e',
  ],
  modulePathIgnorePatterns: [
    "<rootDir>/tests/package",
    '<rootDir>/tests/e2e/server',
    'mock',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};
