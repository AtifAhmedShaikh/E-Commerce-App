const express = require("express");
const router = require("./routes");
const cors=require("cors");
const app = express();
const port = 5000;
const corsConfig={
  origin:["http://localhost:5173"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials:true,
}
app.use(cors(corsConfig));
app.use(express.json())
app.use(router);
app.listen(port, () => {
  console.log("server running on port ", port);
});
