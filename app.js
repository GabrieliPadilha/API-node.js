const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser')
const indexRoute = require('./Routes/index');
const usersRoute = require('./Routes/users');
const config = require('./Config/config');


const url = config.db_string;

mongoose.connect( url, {
    poolSize: 5,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error) => {
    if(error){
        console.log(error)
    }else{
        console.log('conectado com sucesso')
    }
});
mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão com banco de dados: ' + err);
})

mongoose.connection.on('disconect', () => {
    console.log('Aplicação desconectada do banco de dados!')
})

mongoose.connection.on('connected', () => {
    console.log('conectado com sucesso ao banco de dados')
})

//BODY PARSE 
app.use(express.urlencoded({ extended: false}));
app.use(express.json());


app.use('/', indexRoute);
app.use('/users', usersRoute);


 app.listen(3000, () => {
    console.log(`http://localhost:3000`)
 });

module.exports = app;