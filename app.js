const express = require('express');
// importar a biblioteca para conexão externa
const cors = require('cors');

const app = express();

// criar um middleware para receber os dados da requisição

app.use(express.json());

// criar um middleare para permitir a requisição externa
app.options('/message', cors()); // Configurar rota OPTIONS


app.use((req, res, next) => {

  // Qualquer endereço  pode fazer a requisição 
  res.header("Access-Control-Allow-Origin", "*");
  // tipos de método que a api aceita
  res.header(" Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  // permitir o envio de dados para a api
  res.header("Access-Control-Allow-Headers", "Content-Type");
  // execução cors
  app.user(cors());
  next();
  
});


// incluir as controllers 

const messages = require('./controllers/messages');

// criar as rotas

app.use('/message', messages);

app.listen(8080, () =>{
  console.log("Servidor iniciado na porta 8080: http://localhost:8080");

});