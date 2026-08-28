// Função middleware para validar o corpo da requisição
const validateFieldTitle = (req, res, next) => {
    // Obtém o corpo da requisição
    const { body } = req;

// Verifica se o campo "title" está presente e não é vazio
    if (body.title === undefined) {
        // Retorna uma resposta de erro com status 400 (Bad Request) e uma mensagem indicando que o campo "title" é obrigatório
        return res.status(400).json({ message: 'O campo "title" é obrigatório.' });
    }
// Verifica se o campo "title" não é uma string vazia    
    if (body.title === '') {
        // Retorna uma resposta de erro com status 400 (Bad Request) e uma mensagem indicando que o campo "title" não pode ser vazio
        return res.status(400).json({ message: 'O campo "title" não pode ser vazio.' });
    }

// Se a validação passar, chama o próximo middleware ou rota
    next();
};

// Função middleware para validar o campo "status" no corpo da requisição
const validateFieldStatus = (req, res, next) => {
    // Obtém o corpo da requisição
    const { body } = req;
    // Verifica se o campo "status" está presente e não é vazio
    if (body.status === undefined) {
        // Retorna uma resposta de erro com status 400 (Bad Request) e uma mensagem indicando que o campo "status" é obrigatório
        return res.status(400).json({ message: 'O campo "status" é obrigatório.' });
    }
    // Verifica se o campo "status" não é uma string vazia
    if (body.status === '') {
        // Retorna uma resposta de erro com status 400 (Bad Request) e uma mensagem indicando que o campo "status" não pode ser vazio
        return res.status(400).json({ message: 'O campo "status" não pode ser vazio.' });
    }
    // Se a validação passar, chama o próximo middleware ou rota
    next();
};

// Exporta a função middleware para ser usada em outras partes da aplicação
module.exports = {
    validateFieldTitle,
    validateFieldStatus,
};