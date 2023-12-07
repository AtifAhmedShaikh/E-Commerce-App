const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const router = require("./routes");
const bodyParser = require("body-parser");
const connectDataBase = require("./database");
const { port, appPath } = require("./config");
const app = express();
const corsConfig = {
  origin: [appPath],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
app.use(cors(corsConfig));
app.use(express.static("./uploads"));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(cookieParser());
app.use(router);
connectDataBase();
app.listen(port, () => {
  console.log("App server running on some thing one port ");
});
