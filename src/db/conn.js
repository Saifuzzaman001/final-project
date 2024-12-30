const mongoose = require("mongoose");
// creating a database
mongoose
  .connect(
    "mongodb+srv://donate:tareq6251@cluster0.yglw8l0.mongodb.net/donate?retryWrites=true&w=majority",
    {
      // useCreateIndex: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connection successful");
  })
  .catch((error) => {
    console.log(error);
  });
