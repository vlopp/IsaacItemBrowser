import {promises as fsp} from "fs";
import path from "path";
import Spritesmith from "spritesmith";

export default async function ({resourceDirPath, outputDir}) {
  const trinketsGfxPath = path.resolve(resourceDirPath, "gfx\\items\\trinkets");
  const collectiblesGfxPath = path.resolve(
    resourceDirPath,
    "gfx\\items\\collectibles"
  );

  try {
    await fsp.access(outputDir);
  } catch {
    await fsp.mkdir(outputDir);
  }

  const spriteSheetOffsets = {}; // Remember spritesheet offsets

  const spritePath = [
    ...(await fsp.readdir(trinketsGfxPath)).map(file =>
      path.resolve(trinketsGfxPath, file)
    ),
    ...(await fsp.readdir(collectiblesGfxPath)).map(file =>
      path.resolve(collectiblesGfxPath, file)
    )
  ].filter(file => /(?:trinket|collectibles)_(\d+)_/.exec(file));

  await new Promise((resolve, reject) => {
    Spritesmith.run(
      { src: spritePath, algorithm: "left-right" },
      async (err, res) => {
        Object.keys(res.coordinates).forEach(coord => {
          const filename = /((?:trinket|collectibles)_\d+.*?$)/.exec(coord)[1];
          spriteSheetOffsets[filename] = res.coordinates[coord].x;
        });

        await fsp.writeFile(path.resolve(outputDir, "sprites.png"), res.image);
        resolve();
      }
    );
  });

  return spriteSheetOffsets;
}
