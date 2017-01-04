import axios from 'axios'

export function getallstok(){
     return axios({
         method :'get',
        responseType :'json',
        url :'/stok/',
        headers:{
            email :localStorage.getItem('email'),
            token : localStorage.getItem('token')
        }
    })
}

export function addstok(data){
    return axios({
         method :'post',
        responseType :'json',
        url :'/stok/',
        data :data,
        headers:{
            'email' :localStorage.getItem('email'),
            'token' : localStorage.getItem('token')
        }
    })
}

export function editstok(data){
    return axios({
         method :'put',
        responseType :'json',
        url :'/stok/'+data.id,
        data :data,
        headers:{
            email :localStorage.getItem('email'),
            token : localStorage.getItem('token')
        }
    })
}

export function upload_image(data){
    return axios({
         method :'post',
        responseType :'json',
        url :'/stok/upload',
        data :data,
        headers:{
            'email' :localStorage.getItem('email'),
            'token' : localStorage.getItem('token')
        }
    })
}

export function deletestok(id){
     return axios({
         method :'delete',
        responseType :'json',
        url :'/stok/'+id,
        headers:{
            email :localStorage.getItem('email'),
            token : localStorage.getItem('token')
        }
    })
}

