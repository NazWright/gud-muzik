const express = require("express");
const PORT = process.env.PORT || 5004;

const app = express();

app.listen(PORT, () => {
  console.log("The application successfully started on port: ", PORT);
});
