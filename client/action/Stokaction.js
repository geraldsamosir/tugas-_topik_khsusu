import {getallstok,addstok,editstok,deletestok,upload_image} from '../midleware/stokmid'
import axios  from 'axios'

export function getall_stok(){
    return {
        type :"all",
        action :getallstok()
    }
}

export function add_stok(data){
    return {
        type :'add',
        action :addstok(data)

    }
}

export function edit_stok(data){
    return {
        type :'edit',
       action : editstok(data)
    }
}
export function delete_stok(id){
    return {
        type :'register',
        action : deletestok(id)
    }
}

export function upload(data){
    return {
        type:"upload",
        action :upload_image(data)
    }
}