const sequelize = require('./config/database');

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    await sequelize.sync({ force: true }); // Sincroniza modelos com o banco de dados (apagará dados existentes)
    console.log('Modelos sincronizados com o banco de dados.');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
};

syncDatabase();
