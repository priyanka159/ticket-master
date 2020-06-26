import axios from '../config/axios'

export const setCustomers=(customer)=>{
    return {type:'SET_CUSTOMER',payload:customer}
}
export const startSetCustomers=()=>{
    return(dispatch)=>{
        axios.get('/customers',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const customer=response.data
            console.log(customer,'hiii')
            dispatch(setCustomers(customer))
           // console.log(response.data)
        })
    }
}

export const addCustomer=(customer)=>{
    return{type:'ADD_CUSTOMER',payload:customer}
}
export const startAddCustomer=(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/customers',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
           const customer=response.data
           dispatch(addCustomer(customer))
           redirect()
        })
    }

}

export const removeCustomer=(id)=>{
return{type:'REMOVE_CUSTOMER',payload:id}
}
export const startRemoveCustomer=(id)=>{
    return (dispatch)=>{
        axios.delete(`/customers/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const id=response.data._id
            dispatch(removeCustomer(id))
        })
    }
}

export const startUpdateCustomer=(formData,id,redirect)=>{
    return(dispatch)=>{
        axios.put(`/customers/${id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }

        })
        .then((response)=>{
           let customer=response.data
           dispatch(updateCustomer(customer))
            redirect()
        })
    }
}
export const updateCustomer=(customer)=>{
    return{
        type:"UPDATE_CUSTOMER",
        payload:customer
    }
}