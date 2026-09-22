const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());

//  GraphQL routes, webhook handlers, and service logic have been
// redacted from this public reference copy for client confidentiality.
// See the repository README for an overview of what this API does.

app.get("/", (req, res) => {
  res.send(" GraphQL API — code sample (proprietary logic redacted)");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

module.exports = app;
