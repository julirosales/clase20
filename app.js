const express = require("express");

const app = express();
app.set("view engine", "ejs");
/* const PORT = process.env.PORT || 3000; */
app.use(express.static("public"));
const rutasMain = require("./routers/index.routes");

app.use("/", rutasMain);

app.listen(3020, () => {
  console.log("Servidor funcionando");
});
