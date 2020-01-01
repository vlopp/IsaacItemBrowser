import { wikiFetchSingle } from "../fetchWikiData";

describe("wikiFetchSingle", function() {
  it("should fetch effect, notes, interactions and trivia for Anarchist Cookbook ", async function() {
    const result = await wikiFetchSingle(
      "Anarchist Cookbook"
    );
    expect(Object.keys(result).length).toBe(4);

    for (const sectionContent of Object.values(result)) {
      /* At least 10 characters per section. */
      expect(sectionContent.length).toBeGreaterThanOrEqual(10);
    }
  });
});
