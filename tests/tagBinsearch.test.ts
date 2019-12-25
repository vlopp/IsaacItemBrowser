import { binsearch, searchItems } from "../src/searchItems";

describe("Binsearch", function() {
  it('should search for "no" both leftmost and rigtmost', function() {
    expect(binsearch("no").value).toBe("no");
    expect(binsearch("no", "rightmost").value).toBe("now");
  });
});

describe("searchItems", function() {
  it('should search for "no" prefixed items', function() {
    expect(searchItems("no", "mom").length).toBeGreaterThan(10);
  });
});
