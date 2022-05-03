const { describe, it, expect } = require("@jest/globals");

const consoleLog = require("../Function/consoleLog");

it('calls console.log with "Hello World"', () => {
  const consoleSpy = jest.spyOn(console, "log");

  consoleLog();

  expect(consoleSpy).toHaveBeenCalledWith("Hello World");
});
