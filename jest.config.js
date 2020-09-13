// Export jest settings.
module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,jsx}'],
  testPathIgnorePatterns: ['/(build|docs|node_modules)/'],
  coveragePathIgnorePatterns: [
    '/*.config.js',
    '/*.index.js',
    '/node_modules/',
    '/coverage/',
    '/scripts/',
  ],
  coverageDirectory: 'src/spec/coverage/',
  // testResultsProcessor: 'jest-sonar-reporter',
};
