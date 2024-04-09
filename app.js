const express = require("express");
const bodyParser = require("body-parser");
require("./Database/dbConnection");
const googleProductRoutes = require("./Controllers/googleProductController");
const googleUserRoutes = require("./Controllers/googleUserController");
const googleOrderRoutes = require("./Controllers/googleOrderController");
const googleCartRoutes = require("./Controllers/googleCartController");
const googleCommentRoutes = require("./Controllers//googleCommentController");

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use(express.json());
app.use("/api", googleProductRoutes);
app.use("/api", googleUserRoutes);
app.use("/api", googleOrderRoutes);
app.use("/api", googleCartRoutes);
app.use("/api", googleCommentRoutes);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });