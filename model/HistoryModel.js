const knex =  require('../db.js')

module.exports =  new(

    class HistoryModel {

        all(){
            return knex('Histories')
            .select(
                'Histories.id',
                'Histories.qty',
                'Histories.date',
                'Histories.status_code',
                'Users.username',
                'Stoks.item_name'
            )
            .innerJoin('Users','Histories.users','Users.id')
            .innerJoin('Stoks','Histories.stoks','Stoks.id')
        }

        add(_data){
            return knex('Histories')
            .insert({
                status_code:_data.status_code,
                qty : _data.qty,
                date : _data.date,
                users : _data.users,
                stoks :_data.stoks 
            })
        }

        update(_data){
            return knex('Histories')
            .update({
                status_code:_data.status_code,
                qty : _data.qty,
                date : _data.date,
                users : _data.users,
                stoks :_data.stoks 
            })
            .where({
                id: _data.id
            })

        }

        getbyid(data){
            return knex('Histories')
            .where({
                id :data.id
            })
        }


        delete(_data){
            return knex('Histories')
            .where({
                id : _data.id
            })
            .del()
        }

    }

)