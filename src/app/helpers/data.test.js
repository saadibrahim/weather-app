import {
  createDateWiseObjWithAvg,
  addAverages,
  getTotalPagesCount,
  getSinglePageResults,
} from "./data";
import testData from "./testData.json";

describe("dataHelper", () => {
  describe("createDateWiseObjWithAvg", () => {
    test("converts to date wise object using celsius", () => {
      const units = "metric";
      expect(createDateWiseObjWithAvg(testData.listData, units)).toStrictEqual(
        testData.dateWiseObjWithAvgCelsius
      );
    });
    test("converts to date wise object using fahrenheit", () => {
      const units = "imperial";
      expect(createDateWiseObjWithAvg(testData.listData, units)).toStrictEqual(
        testData.dateWiseObjWithAvgFahrenheit
      );
    });
  });
  describe("addAverages", () => {
    test("add average temp to date wise object", () => {
      expect(addAverages(testData.dateWiseObj)).toStrictEqual(
        testData.dateWiseObjWithAvg
      );
    });
  });
  describe("getTotalPagesCount", () => {
    test("get total page count", () => {
      expect(getTotalPagesCount(testData.dateWiseObjWithAvg)).toBe(2);
    });
  });
  describe("getSinglePageResults", () => {
    test("get results for single page", () => {
      expect(getSinglePageResults(testData.dateWiseObj, 2)).toStrictEqual(
        testData.singlePageResults
      );
    });
  });
});
