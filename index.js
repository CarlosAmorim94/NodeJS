const express = require('express')
const app = express()

// criar rota principal //req = requisição, res = resposta
app.get('/index.html' , (req, res) => {
    res.sendFile(__dirname + "/html/index.html") //__dirname = local absoluto onde a aplicação está rodando
})

//Criar página "Sobre" = http://localhost:5000/sobre
app.get('/internacional.html', (req, res)=>{
    res.sendFile(__dirname + "/html/internacional.html")
})

//Criar página "Blog" = http://localhost:5000/blog
app.get('/blog', (req, res)=>{
    res.send('Minha pagina BLOG')
})

//.listen() pede a porta que o servidor vai rodar, deve ser a ultima linha, Acessar navegador e  no link "http://localhost:5000/"
app.listen(5000, () => {
    console.log("Servidor rodando na url http://localhost:5000/ ")
})  
// app.listen(porta, função de callback)
