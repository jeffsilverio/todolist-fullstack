// Importa o módulo express para criar o servidor web
const express = require('express');

// Importa o módulo cors para permitir requisições de diferentes origens
const cors = require('cors');

// Importa o arquivo de rotas que define os endpoints da aplicação
const router = require('./router');

// Cria uma instância do aplicativo Express
const app = express();

// Configuração do middleware para processar requisições com corpo em JSON
app.use(express.json());

// Configuração do middleware para permitir requisições de diferentes origens (CORS)
app.use(cors());

// Configuração do middleware para processar requisições com corpo em JSON
app.use(router);

// Exporta a instância do aplicativo para ser usada em outros arquivos, como o arquivo de inicialização do servidor
module.exports = app;