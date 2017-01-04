const express = require('express');
const router = express.Router();

//midleware
const UserMidleware =  require('../midleware/UserMidleware')
const StokMidleware =  require('../midleware/StokMidleware')

//controller
const  HistoryController =  require('../controller/HistoryController')

router.get('/', UserMidleware.isauth,HistoryController.all);
router.post('/',UserMidleware.isauth,StokMidleware.onadd,HistoryController.add);
router.put('/:id',UserMidleware.isauth,HistoryController.update);
router.delete('/:id',UserMidleware.isauth,StokMidleware.ondelete,HistoryController.delete);

module.exports =  router;