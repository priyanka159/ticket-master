const initialState=[]

const customersReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'SET_CUSTOMER':{
            return [...action.payload]
        }
        case 'ADD_CUSTOMER':{
            console.log(action.payload,'insiide action adding')
            return[...state,action.payload]
        }
        case 'REMOVE_CUSTOMER':{
            return state.filter(cus=>cus._id!==action.payload)
        }
        case 'UPDATE_CUSTOMER':{//changes in the store
return state.map(customer=>{
    if(customer._id==action.payload._id){
        return {...customer,...action.payload}
    }else{
        return {...customer}
    }
})
        }
        default:{
            return [...state]
        }
    }
}
export default customersReducer