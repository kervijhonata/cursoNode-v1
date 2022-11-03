const { Sequelize } = require('./db')
const db = require('./db')

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

// Post.sync({force:true}) // Sempre que rodar, comente a execução para não sobescrever a tabela;

module.exports = Post;