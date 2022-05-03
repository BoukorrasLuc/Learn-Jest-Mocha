const { describe, it, expect } = require("@jest/globals");

const sum = require("../Function/sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
