const express = require(`express`);
const app = express();
const cors = require("cors");
const fs = require("fs");
const Port = 4001;

app.use(cors());
app.use(express.json());

app.post("/Upload", function (req, res) {
  var data = req.body.data;
  var fileName = req.body.fileName;
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      res.send("Error During Upload");
      console.log("Error During Upload ", err);
      return "Error During Upload";
    }
    res.send("Upload");
    return "Upload";
  });
});

app.post("/download", function (req, res) {
  var filePath = req.body.filePath;
  fs.readdir(filePath, (err, files) => {
    var arr = [];
    files.forEach((file) => {
      try {
        // console.log(filePath + "/" + file);
        const data = fs.readFileSync(filePath + "/" + file, "utf8");
        // console.log(data);
        //arr = arr + "~~~" + data;
        arr.push(data);
      } catch (err) {
        console.error(err);
      }
    });
    res.json(arr);
  });
});

const server = app.listen(Port, function () {
  console.log(`MySelf Server Running on Port : ${Port}`);
});
