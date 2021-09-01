const express = require('express');

const router = express.Router();

router.post('/soma', (req, res) => {
    const {num1, num2} = req.body;
    const soma = (num1*1) + (num2*1);

    return res.send({resultado: soma.toString()});
});

router.post('/subtracao', (req, res) => {
    const {num1, num2} = req.body;
    const subtracao = (num1*1) - (num2*1);

    return res.send({resutado: subtracao.toString()});
})

module.exports = router;