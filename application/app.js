const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

app.get("/", (request, response) => {
  response.send("hello, its express js");
});

app.post("/save-user", (request, response) => {
  var user = request.body;
  response.send({ user });
});
app.listen(3000, () => {
  console.log("server is running on port ", 3000);
});
