const express = require('express')
const app = express()

// criar rota principal //req = requisição, res = resposta
app.get('/' , (req, res) => {
    res.send('Ola mundo! Seja bem vindo ao meu app!')
})

//Criar página "Sobre" = http://localhost:8081/sobre
app.get('/sobre', (req, res)=>{
    res.send('Minha pagina SOBRE')
})

//Criar página "Blog" = http://localhost:8081/blog
app.get('/blog', (req, res)=>{
    res.send('Minha pagina BLOG')
})

//.listen() pede a porta que o servidor vai rodar, deve ser a ultima linha, Acessar navegador e  no link "http://localhost:8081/"
app.listen(8081, () => {
    console.log("Servidor rodando na url http://localhost:8081/ ")
})  
// app.listen(porta, função de callback)
