import {statisticDifference} from "../../../utils";

describe("statisticsDifference calculates the difference", () => {
    test("test positive difference", () => {
        expect(statisticDifference(10, 5)).toBe(5);
    });
    test("test negative difference", () => {
        expect(statisticDifference(5, 10)).toBe(-5);
    });
    test("test zero difference", () => {
        expect(statisticDifference(10, 10)).toBe(0);
    });
});
