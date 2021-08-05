const http = require('http'); // Esta importando o modulo http

http.createServer((req,res)=>{ // Função de callback que recebe informações da porta do servidor e envia respostas
    res.writeHead(200,{ // Se ok escreva um texto. Porta 200 é a de tudo ok
        "Contentent-Type":"text/plain"
    })

    res.write('Felipe eh incrivel') // Leia sendo "Escreva('Oque esta escrito aqui')"
    res.end();// Finalisando o servidor 
    
}).listen(1500)/*Porta do servidor*/;