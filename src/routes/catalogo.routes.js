const express = require('express');
const router = express.Router();

const Catalogo = require('../models/catalogo');

//Obtenemos Catalogos
router.get('/', async (req, res) => {
    const catalogos = await Catalogo.find();
    console.log(catalogos);
    res.json(catalogos);    
    
});
//Nuevo Catalogo
router.post('/', async (req, res) => {
    const { name, description } = req.body;
    const catalogo = new Catalogo( {name, description} );
    await catalogo.save();
    res.json({status: 'Nuevo Catalogo guardado'});
});
//Modificamos Catalogo
router.put( '/:id', async (req, res) => {
    const { name, description } = req.body;
    const nuevoCatalogo = { name, description };
    await Catalogo.findByIdAndUpdate(req.params.id, nuevoCatalogo);
    res.json({status: 'Catalogo modificado'});
})
//Eliminamos Catalogo
router.delete( '/:id', async (req, res) => {
    await Catalogo.findByIdAndDelete(req.params.id);
    res.json({status: 'Catalogo eliminado'});
});

module.exports = router;