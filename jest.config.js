module.exports = {
  roots: [
    '<rootDir>/src',
    '<rootDir>/tests/unit',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/tests/e2e',
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
