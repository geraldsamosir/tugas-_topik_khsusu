import axios from 'axios'


export function getallhistories(){
     return axios({
         method :'get',
        responseType :'json',
        url :'/history/',
        headers:{
            email :localStorage.getItem('email'),
            token : localStorage.getItem('token')
        }
    })
}

export function addhistories(data){
    return axios({
         method :'post',
        responseType :'json',
        url :'/history/',
        data :data,
        headers:{
            email :localStorage.getItem('email'),
            token : localStorage.getItem('token')
        }
    })
}

export function edithistories(id,data){
    return axios({
         method :'put',
        responseType :'json',
        url :'/history/'+id,
        data :data,
        headers:{
            email :localStorage.getItem('email'),
            token : localStorage.getItem('token')
        }
    })
}

export function deletehistories(id){
     return axios({
         method :'delete',
        responseType :'json',
        url :'/history/'+id,
        headers:{
            email :localStorage.getItem('email'),
            token : localStorage.getItem('token')
        }
    })
}

