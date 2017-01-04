
const StokModel =  require('../model/StokModel') 
const HistoryModel = require('../model/HistoryModel')

module.exports =  new(
    
    class StokMidleware{

        ondelete(req,res,next){
            let data =  req.params;
            HistoryModel.getbyid(data)
            .then((_result)=>{
                    let data = _result[0]
                    if(data.status_code ==1){
                    StokModel.getbyid(data)
                    .then((_result)=>{
                        let status = parseInt(_result[0].qty) - parseInt(data.qty) 
                        if(_result != [] && status > 0){
                            _result[0].qty = parseInt(_result[0].qty) - parseInt(data.qty) 
                            StokModel.update(_result[0])
                            .then(()=>{
                                next();
                            })
                            
                        }
                        else if(status <0){
                            res.status(200)
                            res.json({
                                message : 0
                            })

                        }
                    })
                }

                //out
                else if(data.status_code ==2){
                    StokModel.getbyid(data)
                    .then((_result)=>{
                        if(_result != []){
                            _result[0].qty = parseInt(_result[0].qty) + parseInt(data.qty) 
                            StokModel.update(_result[0])
                            .then(()=>{
                                next();
                            })
                            
                        }
                    })
                }
   
            })
        }
        
        onadd(req,res,next){
            let data  = req.body;
            //in
            if(data.status_code ==1){
                StokModel.getbyid(data)
                .then((_result)=>{
                    if(_result != []){
                        _result[0].qty = parseInt(_result[0].qty) +parseInt(data.qty) 
                        StokModel.update(_result[0])
                        .then(()=>{
                            next();
                        })
                         
                    }
                })
            }

            //out
            else if(data.status_code ==2){
                 StokModel.getbyid(data)
                .then((_result)=>{
                     let status = parseInt(_result[0].qty) - parseInt(data.qty) 
                    if(_result != [] && status > 0){
                        _result[0].qty = parseInt(_result[0].qty) - parseInt(data.qty) 
                        StokModel.update(_result[0])
                        .then(()=>{
                            next();
                        })
                         
                    }
                else if(status <0){
                        res.status(200)
                        res.json({
                            message : 0
                        })
                    }
                })
            }

        }
        onupdate(){

        }

    }
)