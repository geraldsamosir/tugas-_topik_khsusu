//library
const hash  =   require('password-hash')
const jwt = require('jwt-simple');  

//model
const UserModel =  require('../model/UserModel')

module.exports =  new(
    
    class UserMidleware{
        //this method for check auth 
        isauth(req,res,next){
            if(req.headers.email && req.headers.token){
                let _data = {
                    email  : req.headers.email  ,
                    token : req.headers.token ,
                }
                _data.password  =  jwt.decode(
                    _data.token ,
                     req.app.get('key')
                )
                UserModel.get(_data)
                .then((_result)=>{
                    
                    let _isauth  =  hash.verify(
                        _data.password,
                        _result.password
                    )
                    if(_result){
                        if(_isauth == true){
                            req.body.users =  _result.id
                            next();
                        }
                        else{
                            res.status(403)
                            res.json("your not auth")

                        }   
                    }
                    else{
                         res.status(403)
                            res.json("your not auth")
                    }    
                })
            }
            else{
                res.status(403)
                res.json("require token and email")
            }   
        }

        //this method check super auth (super user)
        issuperauth(req,res,next){
            let _data = {
                email  : req.headers.email ,
            };
            UserModel.get(_data)
            .then((_result)=>{
                if(_result.rules == 2){
                    next();
                }
                else{
                    res.status(403);
                    res.json("your not super auth")
                }
            })
        }
    }
)