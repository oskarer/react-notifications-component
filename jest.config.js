module.exports = {
  "verbose": false,
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupTestFrameworkScriptFile": "<rootDir>/tests/utils/setup.js",
  "collectCoverage": true,
  "collectCoverageFrom": ["src/*.js"],
  "coverageDirectory": "coverage",
  "moduleNameMapper": {
    "\\.(css|scss)$": "<rootDir>/tests/mocks/style.mock.js"
  }
};
