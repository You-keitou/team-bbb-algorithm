import { maxSubarraySum } from "../maxSubarraySum";

describe("maxSubarraySum", () => {
  test("連続する部分配列で最大の和を持つ場合", () => {
    expect(maxSubarraySum([1, -2, 3, 4, -1, 2, 1, -5, 4])).toBe(10);
  });

  test("全ての要素が負数の場合", () => {
    expect(maxSubarraySum([-1, -2, -3, -4])).toBe(-1);
  });

  test("全要素が連続して増加する場合", () => {
    expect(maxSubarraySum([5, 4, -1, 7, 8])).toBe(23);
  });

  test("単一要素配列の場合", () => {
    expect(maxSubarraySum([1])).toBe(1);
  });

  test("全ての要素がゼロの場合", () => {
    expect(maxSubarraySum([0, 0, 0, 0])).toBe(0);
  });
});
