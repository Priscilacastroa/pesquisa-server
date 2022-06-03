const express = require("express");
const app = express();
app.use(express.json());



const pesquisaRouter = require("./routes/pesquisa.routes");
app.use("/pesquisa", pesquisaRouter );



app.listen(4000, () => {
    console.log("Server up at port: 4000 ");
  });