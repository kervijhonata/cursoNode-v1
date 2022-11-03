const baseDeDados = 'teste'
const usuario = 'root'
const senha = 'qwe123'

const Sequelize = require('sequelize')
const sequelize = new Sequelize(baseDeDados, usuario, senha, {
    host: 'localhost',
    dialect: 'mysql'  
})

sequelize.authenticate().then(()=>{
    console.log("Conectado com Sucesso")
}).catch((err)=>{
    console.log("Falha ao conectar >> " + err)
})

const nomeDaTabela = 'postagens'
const Postagem = sequelize.define(nomeDaTabela, {
    titulo: {
        type: Sequelize.STRING //255 Caracteres
    },
    conteudo: {
        type: Sequelize.TEXT //Ilimitada
    }
})

// Postagem.sync({force: true}) // Cria a tabela + FORÇA a criação **OBS: só deve ser executada uma vez**
// Postagem.create({
//     titulo: "Um título Qualquer",
//     conteudo: "Lorem Ipsun dolor sit amet nunquam blablablabla"
// })

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

// Usuario.sync({force: true}) // Cria a tabela + FORÇA a criação **OBS: só deve ser executada uma vez**
Usuario.create({
    nome: "Kervi",
    sobrenome: "Jhonata",
    idade: 22,
    email: "kervij@gmail.com"
})