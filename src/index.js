import React from 'react'
import ReactDOM from 'react-dom'
 import App from './App'
 import configureStore from './store/configureStore'
 import {Provider} from 'react-redux'
 import {startSetUser} from './actions/userAction'
 import {increment,decrement,reset,incrementBy} from './actions/count'
import { startSetCustomers } from './actions/customersAction'
import { startSetTicket } from './actions/ticketAction'
import {startGetDepartment} from './actions/departmentAction'
import {startSetEmployees} from './actions/employeesAction'
 const store=configureStore()
 store.subscribe(()=>{
     console.log(store.getState())
 })
 console.log(store.getState())
// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(decrement())
// store.dispatch(reset())
// store.dispatch(incrementBy(5))
if(localStorage.getItem('authToken')){
    store.dispatch(startSetUser())
    store.dispatch(startSetCustomers())
    store.dispatch(startGetDepartment())
    store.dispatch(startSetEmployees())
    store.dispatch(startSetTicket())
}
const jsx=(
    <Provider store={store}>
        <App/>
    </Provider>
)
 ReactDOM.render(jsx,document.getElementById('root'))