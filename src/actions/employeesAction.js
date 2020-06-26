import axios from "../config/axios"

export const startSetEmployees=()=>{
    return(dispatch)=>{
        axios.get('/employees',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const employees=response.data
            console.log(employees)
            dispatch(setEmployees(employees))
        })
    }
}
    export const setEmployees=(employees)=>{
        return{
            type:'SET_EMPLOYEE',payload:employees
        }
    }

    export const startAddEmployee=(formData,redirect)=>{
        return(dispatch)=>{
            axios.post('/employees',formData,{
                headers :{
                    'x-auth':localStorage.getItem('authToken')
                }
                })
                .then((response)=>{
                    const employees=response.data
                    dispatch(addEmployee(employees))
                    redirect()
                })
        }
    }
    export const addEmployee=(employees)=>{
        return{
            type:'ADD_EMPLOYEE',payload:employees
        }
    }

    export const startRemoveEmployees=(id)=>{
        return(dispatch)=>{
            axios.delete(`/employees/${id}`,{
                headers:{
                    'x-auth':localStorage.getItem('authToken')
                }
            })
            .then((response)=>{
                const id=response.data._id
                dispatch(removeEmployees(id))
            })
        }
    }
    export const removeEmployees=(id)=>{
        return{
            type:'REMOVE_EMPLOYEE',
            payload:id
        }
    }
    export const startUpdateEmployee=(formData,id,redirect)=>{
        return(dispatch)=>{
            axios.put(`/employees/${id}`,formData,{
                headers:{
                    'x-auth':localStorage.getItem('authToken')
                }
    
            })
            .then((response)=>{
               let employees=response.data
               console.log(employees)
               dispatch(updateEmployee(employees))
                redirect()
            })
        }
    }
    export const updateEmployee=(employees)=>{
        return{
            type:"UPDATE_EMPLOYEE",
            payload:employees
        }
    }