const knex =  require('../db.js')

module.exports =  new(

    class SuplierModel {

        all(){
            return knex('Supliers')
        }

        add(_data){
            return knex('Supliers')
            .insert({
                name :_data.name,
                email :_data.qty,
                phone_number :_data.phone_number,
                users:_data.users 
            })
        }

        update(_data){
            return knex('Supliers')
            .update({
                name :_data.name,
                email :_data.qty,
                phone_number :_data.phone_number,
                users:_data.users
            })
            .where({
                id: _data.id
            })

        }

        delete(_data){
            return knex('Supliers')
            .where({
                id : _data.id
            })
            .del()
        }

    }

)