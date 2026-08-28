// Importa o modelo de tarefas
const tasksModel = require('../models/tasksModel');

// Função para obter todas as tarefas
const getAll = async (_req, res) => {
    // Chama a função do modelo para obter todas as tarefas
    const tasks = await tasksModel.getAll();
    // Retorna as tarefas obtidas em formato JSON com status 200 (OK)
    return res.status(200).json(tasks);
};

// Função para criar uma nova tarefa
const createTask = async (req, res) => {
    // Chama a função do modelo para criar uma nova tarefa com os dados fornecidos no corpo da requisição
    const createdTask = await tasksModel.createTask(req.body);
    // Retorna a tarefa criada em formato JSON com status 201 (Created)
    return res.status(201).json(createdTask);
};

// Função para deletar uma tarefa
const deleteTask = async (req, res) => {
    // Obtém o ID da tarefa a ser deletada a partir dos parâmetros da requisição
    const { id } = req.params;
    // Chama a função do modelo para deletar a tarefa com o ID fornecido
    await tasksModel.deleteTask(id);
    // Retorna uma resposta de sucesso sem conteúdo (204 No Content)
    return res.status(204).json();
};

// Função para atualizar o status de uma tarefa
const updateTask = async (req, res) => {
    // Obtém o ID da tarefa a ser atualizada a partir dos parâmetros da requisição
    const { id } = req.params;
    // Chama a função do modelo para atualizar o status da tarefa com o ID fornecido e os dados fornecidos no corpo da requisição
    await tasksModel.updateTask(id, req.body);
    // Retorna uma resposta de sucesso sem conteúdo (204 No Content)
    return res.status(204).json();
};

// Exporta as funções do controller para serem usadas em outras partes da aplicação
module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
};