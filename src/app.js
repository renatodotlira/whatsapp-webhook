const express = require('express');
const User = require('./models/user');
const webhookRoutes = require('./routes/webhookRoutes');
const Phone = require('./models/phone');

const app = express();
const port = 3001;

app.use(express.json());


app.use('/api', webhookRoutes);

// Rota GET simples
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.post('/dados/messages-upsert', async (req, res) => {
  const dados = req.body;
  console.log("chegou mensagem!");
  console.log("número: " + dados.data.key.remoteJid);

  const user = await User.findOne({ where: { number: dados.data.key.remoteJid } });

  if (!user){
    const newUser = await User.create({ number: dados.data.key.remoteJid })
    if (newUser) {
      console.log("Usuário criado");
    }
  } else {
    console.log("fim mensagem! User: " + user.number);
  } 

  console.log(dados.sender);

  const phone = await Phone.findOne({
    include: [{
      model: require('./models/flux'),
      as: 'flux',
    },
    {
      model: require('./models/step'),
      as: 'steps',
    }
    ],
  });

  console.log(phone);

  if (dados.data.message.listResponseMessage && dados.data.message.listResponseMessage.singleSelectReply.selectedRowId) {
    console.log("Resporta: " + dados.data.message.listResponseMessage.singleSelectReply.selectedRowId);
  }

  res.json({
    mensagem: 'Dados recebidos com sucesso!'
  });
});

app.post('/dados/messages-update', (req, res) => {
  const dados = req.body;
  console.log("chegou mensagem!");
  console.log(dados);
  res.json({
    mensagem: 'Dados recebidos com sucesso!',
    dados: dados
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
