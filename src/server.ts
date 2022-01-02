import express from "express";

const app = express();

/*
GET    => Buscar uma informação. 
POST   => Inserir informação.
PUT    => Alterar uma informação.
DELETE => Deletar uma informação.
PATCH  => Alterar uma informação especifica. 
*/

/*
  - Tipos de parametros 
    Routes Params => https://localhost:3000/produtos/54642345123987
    Query Params  => http://localhost:3000/produtos?name=teclado&description=tecladobom
    Body Params   => {
      "name": "teclado"
      "description": "teclado bom"
    }
*/
app.get("/test", (req, res) => {
  //REQ => Todo dado que entra.
  //RES => Todo dado que sai.
  return res.send("Funcionando");
});
app.post("/test-post", (req, res) => {
  return res.send("Continua funcionando");
});
app.listen(3000, () => console.log("Server is Running"));
