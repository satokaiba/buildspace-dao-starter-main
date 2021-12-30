import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x967d7A20144Ee202F8Ab7dC2bb5657fEa233bc09",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Beach Parasol",
        description: "This NFT will give you access to BeachDAO!",
        image: readFileSync("scripts/assets/beach-u.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
