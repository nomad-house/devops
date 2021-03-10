process.env.NODE_ENV = "testing";
module.exports = {
  roots: ["./"],
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.+(ts|tsx)", "**/?(*.)+(spec|test).+(ts|tsx)"],
  transform: { "^.+\\.(ts|tsx)$": "ts-jest" }
};
