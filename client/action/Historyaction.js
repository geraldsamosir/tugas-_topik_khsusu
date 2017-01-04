import axios  from 'axios'

import {getallhistories,addhistories,edithistories,deletehistories} from '../midleware/historiesmid'

export function getall_history(){
    return{
        type:"all",
        action  : getallhistories()
    }
}

export function add_history(data){
    return {
        type :'add history in',
       action  : addhistories(data)
    }
}


export function edit_history(data){
    return {
        type :'edit history in',
        action :edithistories(data)
    }
}


export function delete_history(id){
    return {
        type :'delete history in',
        action :deletehistories(id)
    }
}
