import {createStore,combineReducers,applyMiddleware} from 'redux'
import countReducer from '../reducers/count'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import customersReducer from '../reducers/customersReducer'
import departmentsReducer from '../reducers/departmentReducer'
import employeesReducer from '../reducers/employeesReducer'
import ticketsReducer from '../reducers/tikcetsReducer'
const configureStore=()=>{
    const store=createStore(combineReducers({
        count:countReducer,
        user:userReducer,
        customer:customersReducer,
        department:departmentsReducer,
        employees:employeesReducer,
        tickets:ticketsReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore