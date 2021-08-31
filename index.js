const express = require('express');
const router = require('./operacoes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use('/operacoes', router);

app.all('/', (req, res) => {
    return res.send({message: "ok"});
}).listen(3000);

console.log("App is working...");
