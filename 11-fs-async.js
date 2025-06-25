const { readFile, writeFile } = require("fs");
//uses callbacks
//read from file

console.log("Start");

readFile("./content/first", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  const first = result;
  readFile("./content/second", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result:${first}, ${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Done with this task!");
      }
    );
  });
});
        console.log("Starting the next one!");
