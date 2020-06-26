const initialState=[]

const  ticketsReducer=(state=initialState,action)=>{
switch(action.type){
    case 'SET_TICKET':{
        return [...action.payload]
    }
    case 'REMOVE_TICKET':{
        return state.filter(ticket=>ticket._id!==action.payload)
    }
    case 'ADD_TICKET':{
        return [...state,action.payload]
    }
    case 'UPDATE_TICKET':{
        return state.map(tikt=>{
            if(tikt._id==action.payload._id){
                return{...tikt,...action.payload}
            }
            else{
                return {...tikt}
            }
        })
    }
default:{
    return [...state]
}
}
}
export default ticketsReducer