import { convertToFahrenheit } from "./units";

describe("unitsHelper", () => {
  test("converts to fahrenheit correctly", () => {
    const celsius = 12.5;
    expect(convertToFahrenheit(celsius)).toBe(54.5);
  });
});
