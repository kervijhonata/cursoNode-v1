// Importações
const Sequelize = require('sequelize')

// Definições Locais
const baseDeDados = 'post_app'
const usuario = 'root'
const senha = 'qwe123'

// Config
//      Conexão com o Banco de Dados
const sequelize = new Sequelize(baseDeDados, usuario, senha, {
    host: 'localhost',
    dialect: 'mysql',
    query: {raw:true}
})

// Export
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}