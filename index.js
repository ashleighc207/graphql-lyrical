const app = require("./server/server");

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/index.html"), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(4000, () => {
  console.log("Listening");
});
