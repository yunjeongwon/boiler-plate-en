const express = require("express");
const app = express();
const mogoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://johnahn:abcd1234@boilerplate.fgv8c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then((res) => console.log("DB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(5000);
