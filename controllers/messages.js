const express = require('express');


// realizar conexão com  db 

const db = require('../db/models')


const router = express.Router();

// criar rota cadastrar

router.post('/', async (req, res) => {

  // receber os dados na api
  var data = req.body;

  //salvar no banco de dados

  await db.Messages.create(data).then((dataMessage) =>{

    return res.json({
      error: false,
      message: 'Mensagem cadastrada com sucesso.',
      data
    });


  }).catch(()=>{

    return res.json({
      error: false,
      message: 'Mensagem não cadastrada com sucesso.',
      data
    });

  })

  
});

// exportar routes
module.exports = router;