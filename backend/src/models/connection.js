// Importa o módulo mysql2/promise para criar uma conexão com o banco de dados MySQL
const mysql = require('mysql2/promise');

// Importa o módulo dotenv para carregar variáveis de ambiente do arquivo .env
require('dotenv').config();

// Cria uma conexão com o banco de dados MySQL usando as variáveis de ambiente
const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

// Exporta a conexão para ser usada em outras partes da aplicação
module.exports = connection;