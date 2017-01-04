const knex =  require('../db.js')

module.exports =  new(

    class StokModel {

        all(){
            return knex('Stoks')
            .select(
                'Stoks.id',
                'Stoks.item_name',
                'Stoks.qty',
                'Stoks.image',
                'Users.username'
            )
            .innerJoin('Users','Stoks.users','Users.id')
        }

        add(_data){
            return knex('Stoks')
            .insert({
                item_name :_data.item_name,
                qty :_data.qty,
                users :_data.users,
                image : _data.image 
            })
        }

        update(_data){
            return knex('Stoks')
            .update({
                item_name :_data.item_name,
                qty :_data.qty,
                users :_data.users 
            })
            .where({
                id: _data.id
            })

        }

        delete(_data){
            return knex('Stoks')
            .where({
                id : _data.id
            })
            .del()
        }

        getbyid(_data){
            return knex('Stoks')
            .where({
                id :_data.stoks
            })
        }

    }

)