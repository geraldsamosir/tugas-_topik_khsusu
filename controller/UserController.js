//library
const hash  =   require('password-hash')
const jwt = require('jwt-simple');  

//model
const UserModel =  require('../model/UserModel')


module.exports = new(
    
    class UserController{

        all(req,res){
            UserModel.all()
            .then((all)=>{
                res.status(200)
                res.json(all)
            })
        }

        add(req,res){
            let  _data =  req.body;
            let _result = {}
            _data.realpass =  _data.password
            _data.password = hash.generate(
                _data.password
            );
            _data.rules =1;
            UserModel.get(_data)
            .then((result)=>{
                if(!result){                    
                    UserModel.add(_data)
                    .then(()=>{
                        _result.token =  jwt.encode(
                            _data.realpass,
                           req.app.get('key')
                        )
                        _result.email =  _data.email   
                        _result.username = _data.username
                        _result.rules = _data.rules
                        res.status(201);
                        res.json(_result)
                        
                    })
                }
                else{
                    res.status(409)
                    res.json(
                        "email has used"
                    )
                }
            })
        }

        login(req,res){
            let _data =  req.body;
            let _isauth ={}
            UserModel.get(_data)
            .then((_result)=>{
                if(_result){
                _isauth  =  hash.verify(
                    _data.password, 
                    _result.password
                )
                }
                else{
                    res.status(403)
                    res.json("your not auth")
                }
                if(_isauth == true){
                    res.status(200);
                    res.json({
                        username  : _result.username,
                        token  : jwt.encode(
                            _data.password,
                            req.app.get('key')
                        ),
                        email :  _result.email,
                        rules : _result.rules
                    })
                }
                else{
                    res.status(403);
                    res.json("youre not  auth")
                }
            })
        }
            
        delete_user(req,res){
            let _data = {}
            _data.id =  req.params.id;
            UserModel.delete(_data)
            .then(()=>{
                res.status(200)
                res.json("user has been deleted")
            })
        }    
    }
)

