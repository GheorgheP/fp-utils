module.exports = {
  moduleFileExtensions: ["js", "ts"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  testPathIgnorePatterns: ["<rootDir>(?!/src/).+"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
};
