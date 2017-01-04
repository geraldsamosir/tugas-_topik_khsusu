import axios  from 'axios'

export function postlogin(data){
    return axios({
        method :'post',
        responseType :'json',
        url :'/users/login',
        data : data
    })
}

export function postregister(data){
    return axios({
        method :'post',
        responseType :'json',
        url :'/users/register',
        data : data,
        headers:{
            email :localStorage.getItem('email'),
            token : localStorage.getItem('token')
        }
    })
}

export function getuser(){
    return axios({
         method :'get',
        responseType :'json',
        url :'/users/',
        headers:{
            email :localStorage.getItem('email'),
            token : localStorage.getItem('token')
        }
    })
}

export function delete_user(id){
    return axios({
        method:'delete',
        responseType :'json',
        url : '/users/'+id,
        headers:{
            email :localStorage.getItem('email'),
            token :localStorage.getItem('token')
        }
    })
}