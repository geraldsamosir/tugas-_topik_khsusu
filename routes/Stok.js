const express = require('express');
const router = express.Router();

//midleware
const UserMidleware =  require('../midleware/UserMidleware')
const Upload  = require('../midleware/ImageMidleware')

//controller
const  StokController =  require('../controller/StokController')

router.get('/', UserMidleware.isauth,StokController.all);
router.post('/',UserMidleware.isauth,StokController.add);
router.put('/:id',UserMidleware.isauth,StokController.update);
router.delete('/:id',UserMidleware.isauth,StokController.delete);

router.post('/upload',Upload,function(req,res){
    res.json(req.body)
})
module.exports =  router;