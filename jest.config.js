// Export jest settings.
module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js}'],
  testPathIgnorePatterns: ['/(build|docs|node_modules)/'],
  coveragePathIgnorePatterns: [
    '/*.config.js',
    '/*.index.js',
    '/node_modules/',
    '/scripts/',
  ],
  coverageDirectory: 'src/spec/coverage/',
};
