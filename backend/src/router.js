// Importa o módulo express para criar o roteador
const express = require('express');

// Importa o controller de tarefas
const tasksController = require('./controllers/tasksController');

// Importa o middleware de validação do corpo da requisição
const tasksMiddleware = require('./middlewares/tasksMiddleware');

// Cria uma instância do roteador do Express
const router = express.Router();

// Rota para obter todas as tarefas
router.get('/tasks', tasksController.getAll);

// Rota para criar uma nova tarefa
router.post('/tasks', tasksMiddleware.validateFieldTitle, tasksController.createTask);

// Rota para deletar uma tarefa pelo ID
router.delete('/tasks/:id', tasksController.deleteTask);

// Rota para atualizar o status de uma tarefa pelo ID
router.put('/tasks/:id', 
    tasksMiddleware.validateFieldTitle, 
    tasksMiddleware.validateFieldStatus, 
    tasksController.updateTask);

// Rota para deletar uma tarefa pelo ID
module.exports = router;