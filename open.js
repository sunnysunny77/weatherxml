import open from "open";

await open(`https://${process.env.CN}:3000`);
console.log(`running on https://${process.env.CN}:3000`);
