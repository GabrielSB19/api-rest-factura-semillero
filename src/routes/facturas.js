const express = require('express');
const router = express.Router();

const mysqlConecction = require('../database');

router.get('/', (req, res)=>{
    mysqlConecction.query('SELECT * from cliente', (err, rows)=>{
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})

router.get('/:id', (req, res)=>{
    const {id} = req.params;
    mysqlConecction.query('SELECT D.* FROM DETALLE D, FACTURA F, CLIENTE C WHERE ? = F.ID_CLIENTE AND D.ID_FACTURA = F.NUM_FACTURA', [id], (err, rows)=>{
        if(!err){
            res.json(val_factura(rows[0].PRECIO, rows[0].CANTIDAD))
        } else {
            console.log(err)
        }
    })
})

const val_factura = (valor, cantidad) =>{
    if(valor > 1000000 && cantidad >= 5){
        return 'Aplica descuento: ' + (valor - valor*0.1);
    } else {
        return "No aplica descuento: " + valor;
    }
}


module.exports = router;
