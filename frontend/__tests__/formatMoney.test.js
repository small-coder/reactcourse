import formatMoney from "../lib/formatMoney";

describe("formatMoney function", () => {
  it("works with fractional pounds", () => {
    expect(formatMoney(1)).toEqual("£0.01");
  });
  it("leaves pence off for whole pounds", () => {
    expect(formatMoney(5000)).toEqual("£50");
    expect(formatMoney(50000)).toEqual("£500");
    expect(formatMoney(500000)).toEqual("£5,000");
    expect(formatMoney(5000000)).toEqual("£50,000");
  });
  it("works with whole and fractional amounts", () => {
    expect(formatMoney(5012)).toEqual("£50.12");
    expect(formatMoney(101)).toEqual("£1.01");
    expect(formatMoney(265656885566)).toEqual("£2,656,568,855.66");
  });
});
