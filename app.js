// external imports here
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

// internal imports here
const {
  errorHandler,
  notFoundHandler,
} = require("./middlewares/common/errorHandler");
const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");

// dotenv initialize here
const dotenv = require("dotenv");
dotenv.config();

// database connection here
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection successfull!"))
  .catch((err) => console.log(err));

// request parser here
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine here
app.set("view engine", "ejs");

// set static folder here
app.use(express.static(path.join(__dirname, "public")));

// parse cookies here
app.use(cookieParser(process.env.COOKIE_SECRET));

// route setup here
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

// 404 not found route handler here
app.use(notFoundHandler);

// error handling here
app.use(errorHandler);

// server home route here
// app.get("/", (req, res) => {
//   res.send("SERVER IS RUNNING WITH OUT ANY ERROR!");
// });

// server is listenning here
app.listen(PORT, () => {
  console.log("SERVER IS LISTENNING ON PORT ", PORT);
});
