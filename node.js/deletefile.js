var fs = require("fs");
fs.unlink("input.txt", function (err, data) {
  if (err) throw err;
  console.log("file is deleted");
});
