//model
const HistoryModel =  require('../model/HistoryModel')

module.exports  =  new (
    class HistoryController {
            all(req,res){
            HistoryModel.all()
            .then((_result)=>{
                res.status(200)
                res.json(_result)
            })
        }

        add(req,res){
            let _data  =  req.body;
            HistoryModel.add(_data)
            .then(()=>{
                res.status(201)
                res.json('History item  add')
            })
        }

        update(req,res){
            let _data = req.body;
            _data.id =  req.params.id ;
            HistoryModel.update(_data)
            .then(()=>{
                res.status(200);
                res.json('History item updated')
            })
        }

        delete(req,res){
            let _data = {};
            _data.id = req.params.id;
            HistoryModel.delete(_data)
            .then(()=>{
                res.status(200);
                res.json('History item deleted')
            })
        }
    }
)