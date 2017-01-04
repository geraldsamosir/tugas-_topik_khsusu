const knex =  require('../db.js')

module.exports = new(
    
    class UserModel {
        all(){
            return knex('Users')
        }

        get(_data){
            return knex('Users')
            .where({
                email: _data.email
            })
            .first()
        }



        add(_data){
            return knex('Users')
            .insert({
                username: _data.username,
                email : _data.email,
                password :  _data.password,
                rules : _data.rules
            })
        }

        delete(_data){
            return knex('Users')
            .where({
                id : _data.id
            })
            .del()
        }

    }
)

