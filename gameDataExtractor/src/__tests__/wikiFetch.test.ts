import {wikiFetchSingle} from "../fetchWikiData";

describe('it', function () {
    it('should do stuff', async function () {
        const result = await wikiFetchSingle("Anarchist Cookbook");
    });
});