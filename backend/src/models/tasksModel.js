// Importa a conexão com o banco de dados
const connection = require('./connection');

// Funções que interagem com o banco de dados
const getAll = async () => {
    // Executa uma consulta SQL para obter todas as tarefas da tabela "tasks"
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    // Retorna o resultado da consulta, que é um array de tarefas
    return tasks;
};

// Função para criar uma nova tarefa
const createTask = async (task) => {
    // Obtém o título da tarefa a partir do objeto task
    const { title } = task;
    // Obtém a data e hora atual em formato UTC
    const dataUTC = new Date(Date.now()).toUTCString();
    // Prepara a consulta SQL para inserir uma nova tarefa na tabela "tasks"
    const query = 'INSERT INTO tasks (title, status, created_at) VALUES (?, ?, ?)';
    // Executa a consulta SQL com os valores fornecidos (título, status "pendente" e data UTC)
    const [createdTask] = await connection.execute(query, [title, 'pendente', dataUTC]);
    // Retorna o ID da tarefa criada, que é obtido a partir do resultado da execução da consulta
    return { insertedId: createdTask.insertId };

};

// Função para deletar uma tarefa
const deleteTask = async (id) => {
    // Executa uma consulta SQL para deletar a tarefa com o ID fornecido da tabela "tasks"
    const removedTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
    // Retorna o resultado da execução da consulta, que indica se a tarefa foi removida com sucesso
    return removedTask;
};

// Função para atualizar o status de uma tarefa
const updateTask = async (id, task) => {
    // Cria um objeto task com os valores fornecidos (título e status)
    const { title, status } = task;
    // Prepara a consulta SQL para atualizar o título e o status da tarefa com o ID fornecido na tabela "tasks"
    const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';
    // Executa a consulta SQL com os valores fornecidos (título, status e ID da tarefa)
    const updatedTask = await connection.execute(query, [title, status, id]);
    // Retorna o resultado da execução da consulta, que indica se a tarefa foi atualizada com sucesso
    return updatedTask;
};

// Exporta as funções do modelo para serem usadas em outras partes da aplicação
module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
};