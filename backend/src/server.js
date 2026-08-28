// Importa a instância do aplicativo Express do arquivo app.js
const app = require('./app');

// Importa o módulo dotenv para carregar variáveis de ambiente do arquivo .env
require('dotenv').config();

// Define a porta em que o servidor irá escutar, usando a variável de ambiente PORT ou o valor padrão 3333
const PORT = process.env.PORT || 3333;

// Inicia o servidor na porta especificada
app.listen(PORT, () =>  console.log(`Server is running on port ${PORT}`));