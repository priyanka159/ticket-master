import axios from "../config/axios"

export const startSetTicket=()=>{
    return(dispatch)=>{
        axios.get('/tickets',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            console.log(response.data)
            const tickets=response.data
        
        dispatch(setTicket(tickets))
    })
}
    
}
export const setTicket=(tickets)=>{
return{
    type:'SET_TICKET',
    payload:tickets
}
}
export const startRemoveTicket=(id)=>{
    return (dispatch)=>{
        axios.delete(`/tickets/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const id=response.data._id
            dispatch(removeTicket(id))
        })
    }
}

export const removeTicket=(id)=>{
    return{
        type:'REMOVE_TICKET',
        payload:id
    }
}
export const startAddTicket=(formData,redirect)=>{
    return(dispatch)=>{
        axios.post(`/tickets`,formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const tickets=response.data
            dispatch(addTicket(tickets))
            redirect()
        })
    }
}
export const addTicket=(tickets)=>{
    return{
        type:'ADD_TICKET',
        payload:tickets
    }
}
export const startUpdateTicket=(formData,id,redirect)=>{
    return(dispatch)=>{
        axios.put(`/tickets/${id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const tickets=response.data
            dispatch(updateTicket(tickets))
            redirect()
        })
    }
}
export const updateTicket=(tickets)=>{
    return{
        type:'UPDATE_TICKET',
        payload:tickets
    }
}