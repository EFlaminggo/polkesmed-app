const express = require("express");
const cors = require("cors");
require("dotenv").config();
const routes = require("./routes");

const app = express();

const port = process.env.PORT;
app.use(express.json()); // To parse any incoming request in JSON format
app.use(cors()); // For CORS policy

app.use(routes);
// app.get("/", (req, res) => {
//     res.send("Hello world!");
// });

// 127.0.0.1 is same as localhost
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
