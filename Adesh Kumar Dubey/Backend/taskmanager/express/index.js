const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", function (req, res) {
  const filesDir = path.join(__dirname, "files");

  fs.readdir(filesDir, function (err, files) {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred");
      return;
    }

    const tasks = files.map(file => {
      const content = fs.readFileSync(path.join(filesDir, file), 'utf-8');
      return {
        title: path.basename(file, '.txt'),
        details: content
      };
    });

    res.render("index", { files: tasks });
  });
});

app.post("/create", function (req, res) {
  const title = req.body.title;
  const details = req.body.details;

  if (!title || !details) {
    res.status(400).send("Title and details are required");
    return;
  }

  const fileName = title.split(" ").join("") + ".txt";
  const filePath = path.join(__dirname, "files", fileName);

  fs.writeFile(filePath, details, function (err) {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred");
      return;
    }
    res.redirect("/");
  });
});
app.post("/delete", (req, res) => {
  const title = req.body.title;
  if (!title) {
      res.status(400).send("Title is required to delete the task");
      return;
  }

  const filePath = path.join(__dirname, "files", `${title}.txt`);
  fs.unlink(filePath, function (err) {
      if (err) {
          console.error(err);
          res.status(500).send("An error occurred while deleting the task");
          return;
      }
      
      res.redirect("/");
  });
});
