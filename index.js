const Sequelize = require('sequelize')
const sequelize =  new Sequelize('teste', 'root', 'blablabla', {
    host: 'localhost',
    dialect: 'mysql'
} )  // banco, usuario, senha

//Função para verificar se conecta ao banco de dados (JS normal = .then() se deu certo ou .catch() se deu erro)
sequelize.authenticate().then( () => {
    console.log('Conectado com sucesso!')}
).catch( (erro) => {
    console.log(`Falha so se conectar: ${erro}`)
})

// Criar model para postagem
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING // caracteres limitados
    },
    conteudo: {
        type: Sequelize.TEXT // type TEXT são caracteres ilimitados
    }
})

//  CRIANDO UMA POSTAGEM NA TABELA postagens
Postagem.create({
    titulo: "Fazendo um testde de cadastro",
    conteudo: "conteudos aleatorios lkncolnexlençlnrvsojnvçrdonbçdlkbmçxofbm xçofkbmxdpkmbx~dpçk bm~xohnm~pxmgb~xphtnm~pf"
})

//      CRIANDO TABELA usuarios 
const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER // Numeros inteiros
    },
    email: {
        type: Sequelize.STRING
    }
})

//Usuario.sync({force: true})

// CRIANDO UM USUARIO NA TABELA usuarios
Usuario.create({
    nome: "Carlos",
    sobrenome: "Amorim",
    idade: 27 ,
    email: "carlos.av.amorim@gmail.com"
})

