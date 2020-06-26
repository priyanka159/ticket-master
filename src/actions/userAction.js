import axios from '../config/axios'
//props pass in startRegister
export const setuser=(user)=>{
    return{type:'SET_USER',payload:user}
}
export const startRegister=(formData,redirect)=>{
    return()=>{
        axios.post('/users/register',formData)
        .then((response)=>{
           // console.log(response.data)
       if(response.data.hasOwnProperty('errors')){
alert(response.data.message)
       }
       else{
         //  props.history.push('/users/login')
     redirect()
        }
        })

        .catch(err=>{
            console.log(err)
        })
    }
}
export const startSetUser=()=>{
    return(dispatch)=>{
        axios.get('/users/account',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const user=response.data
            dispatch(setuser(user))
           // console.log(response.data)
           // props.history.push('/home')
        })
    }
}
export const startLogin=(formData,props)=>{
    return(dispatch)=>{
        axios.post('/users/login',formData)
        .then((response)=>{
            if(response.data.hasOwnProperty('error')){
            alert(response.data.error)
            }
            else{
                //store
                localStorage.setItem('authToken',response.data.token)
            //  props.history.push('/home')
        //       axios.get('/users/account',{
        //           headers:{
        //               'x-auth':localStorage.getItem('authToken')
        //           }
        //       })
        //       .then(response=>{
        //           const user=response.data
        //           dispatch(setuser(user))
        //          // console.log(response.data)
                 props.history.push("/")
        //       })
        //        // console.log(response.data)
        }
         })
    }
}

export const startLogout=()=>{
    return(dispatch)=>{
        axios.delete(`/users/logout`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            if(response.data.notice){
                localStorage.removeItem('authToken')//
          dispatch(removeUser())
          window.location.href="/users/login"
            }
       
        })
    }
}
export const removeUser=()=>{
    return{type:'REMOVE_USER'}//no payload
}