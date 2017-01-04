import {postlogin,postregister,getuser,delete_user} from '../midleware/usersmid'
import {browserHistory} from 'react-router'
import store  from  '../store'

export function login(data){
    return  {
        type :'is_login',
        action : postlogin(data)
                .then((result)=>{
                    if(result.status ==200){
                        localStorage.setItem('email',result.data.email)
                        localStorage.setItem('token',result.data.token)
                        localStorage.setItem('username',result.data.username)
                        localStorage.setItem('login',true)
                        localStorage.setItem('rules',result.data.rules)
                        browserHistory.push('/@stok')
                    }
                    
                })
                .catch( (error) => {
                    if(error.response.status ==403){
                         swal("Eror!", "username/password false !", "error")
                    }
                    
                })
    }
    
}

export function register (data){
    return {
        type :'register',
        action : postregister(data)
                .then((result,err)=>{
                    if(result.status ==201){
                        //sementara
                        swal("Created!", "Admin Created !", "success")
                    }

                })
                .catch( (error) => {
                    if(error.response.status ==409){
                        swal("Eror!", "email has used !", "error")
                    }
                    
                })
    }
}


export function delete_users (id){
    return {
        type:'delete',
        action: delete_user(id)
    }
}
export function getallusers (){
    return {
        type :'users',
        action :getuser()
    }
    
}
