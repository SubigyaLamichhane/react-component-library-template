// import tokens from "./tokens.json" assert { type: "json" };
const tokens = require("./tokens.json", "json");
const FileSystem = require("fs");

const dark = tokens.dark;

FileSystem.writeFile(
  "dark.json",
  JSON.stringify({
    ...tokens.dark,
  }),
  (error) => {
    if (error) throw error;
  }
);
