// Importações
const express = require('express')
const app = express()
const handlebars = require('express-handlebars') //Template Engine
const bodyParser = require('body-parser')
const Post = require('./models/Post')

// Definições Locais
const port = 8081

// Configurações
//      Template Engine
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
//      Body Parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// Rotas do Servidor
app.get('/', (req, res)=>{
    Post.findAll({order:[['id','DESC']]}).then((posts)=>{ //Busca todos os Dados de Post [com filtro no ID Decrescente]
        res.render('./layouts/home', {posts: posts})
    })
})
app.get('/cad', (req, res)=>{
    res.render('./layouts/formulario')
})
app.post('/add/postagem', (req, res)=>{
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(()=>{
        res.redirect('/')
    }).catch((err)=>{
        res.send(`Erro na criação do Post: ${err}`)
    })
})
app.get('/deletar/postagem/:id', (req, res)=>{
    //Deleta um post
    Post.destroy({where: {'id':req.params.id}}).then(()=>{
        res.send("Postagem deletada com Sucesso")
    }).catch( err => console.log("Esta postagem não existe: "+err) )
})

// Abertura do Servidor
app.listen(port, (server)=>{
    console.log(`Servidor rodando na porta ${port}`)
})