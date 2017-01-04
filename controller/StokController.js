//model
const StokModel =  require('../model/StokModel') 

module.exports = new (
    class StokController{

        all(req,res){
            StokModel.all()
            .then((_result)=>{
                res.status(200)
                res.json(_result)
            })
        }

        add(req,res){
            let _data  =  req.body;
            console.log(_data)
            StokModel.add(_data)
            .then(()=>{
                res.status(201)
                res.json('Stok item  add')
            })
        }

        update(req,res){
            let _data = req.body;
            _data.id =  req.params.id ;
            StokModel.update(_data)
            .then(()=>{
                res.status(200);
                res.json('Stok item updated')
            })
        }

        delete(req,res){
            let _data = {};
            _data.id = req.params.id;
            StokModel.delete(_data)
            .then(()=>{
                res.status(200);
                res.json('Stok item deleted')
            })
        }
    }
)