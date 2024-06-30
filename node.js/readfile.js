var fs = require("fs");
fs.readFile("input.txt", function (err, data) {
  if (err) console.log(err);
  console.log(data.toString());
});
