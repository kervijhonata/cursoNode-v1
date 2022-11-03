const { default: mongoose } = require('mongoose')
const moongose = require('mongoose')

// Local Configurations
const host = 'localhost'
const banco = 'bancoQualquer'

// Mongoose Config
mongoose.Promise = global.Promise; // Resolutor de erros do mongoose = resolutor Javascript
moongose.connect(`mongodb://${host}/${banco}`).then(()=>{
    console.log("MongoDB Conectado...")
}).catch((err) => {
    console.log(`Houve um erro ao conectar ao MongoDB: ${err}`)
})

// Definindo o Model - Usuarios
const UserSchema = mongoose.Schema({
    nome: {
        type: String, // Utiliza os tipos do próprio Javascript
        require: true // TRUE se um dado precisar ser Obrigatório (preenchido) : False|<Omitido> se não
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number, // Recebe QUALQUER tipo de número
        require: true
    },
    pais: {
        type: String
    }
})

// Collections
mongoose.model('usuarios', UserSchema) //Cria a coleção 'usuarios' (tabela)

const UserInfo = moongose.model('usuarios') // pode ser declarado com qualquer nome

new UserInfo({ // Cria um novo Usuário 
    nome: "John",
    sobrenome: "Doe",
    email: "johndoe@mail.com",
    idade: 40,
    pais: "EUA"
}).save().then(()=>{ // save() executa a função
    console.log(`usuário criado com sucesso`)
}).catch((err)=>{
    console.log(`erro na criação de usuário: ${err}`)
})