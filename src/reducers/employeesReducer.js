let initialState=[]
const employeesReducer=(state=initialState,action)=>{
switch(action.type){
    case 'SET_EMPLOYEE':{
        return [...action.payload]
    }
    case 'ADD_EMPLOYEE':{
        return [...state,action.payload]
    }
    case 'REMOVE_EMPLOYEE':{
        return state.filter(emp=>emp._id!==action.payload)
    }
    case 'UPDATE_EMPLOYEE':{//changes in the store
        return state.map(emp=>{
            if(emp._id==action.payload._id){
                return {...emp,...action.payload}
            }else{
                return {...emp}
            }
        })
                }
    default:{
        return [...state]
    }
}
}
export default employeesReducer