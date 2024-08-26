const receiver = async (req, res) => {
  // Acessa o corpo da requisição
  const dados = req.body;
  console.log("chegou mensagem!");
  // Processa os dados (aqui você pode fazer o que precisar com os dados recebidos)
  console.log(dados);

  // Envia uma resposta de volta
  res.status(201).json({
      mensagem: 'Dados recebidos com sucesso!',
      dadosRecebidos: dados
  });
};

module.exports = {
  receiver
};
