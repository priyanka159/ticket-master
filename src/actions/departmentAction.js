import axios from '../config/axios'

export const startGetDepartment=()=>{
    return(dispatch)=>{
        axios.get('/departments',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const department=response.data
          //  console.log(response.data)
            dispatch(setDepartment(department))
        })
    }
}
export const setDepartment=(department)=>{
    return{
        type:'SET_DEPARTMENT',
        payload:department
    }
}

export const removeDepartment=(id)=>{//only id
return{
    type:'REMOVE_DEPARTMENT',
    payload:id
}
}
export const startRemoveDepartment=(id)=>{
    return(dispatch)=>{
        axios.delete(`/departments/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const department=response.data
            dispatch(removeDepartment(department._id))
          //  console.log(response)
        })
    }
}
export const startAddDepartment=(formData)=>{
    return(dispatch)=>{
        axios.post('/departments',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log(response.data)
            const department=response.data
            console.log(department)
            dispatch(addDepartment(department))
        })
    }
}
export const addDepartment=(department)=>{
return{
    type:'ADD_DEPARTMENT',
    payload:department
}
}
export const startUpdateDepartment=(formData,id,redirect)=>{
    return(dispatch)=>{
        axios.put(`/departments/${id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            let department=response.data
            dispatch(updateDepartment(department))
            redirect()
        })
    }
}
export const updateDepartment=(department)=>{
    return{
        type:"UPDATE_DEPARTMENT",
        payload:department
    }
}