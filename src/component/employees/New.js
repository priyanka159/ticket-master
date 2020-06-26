import React from 'react'
import Form from './Form'
import {connect} from 'react-redux'
import { startAddEmployee } from '../../actions/employeesAction'
//import {startAddCustomer} from '../../actions/customersAction'
function EmployeeNew(props){
    let handleSubmit=(formData)=>{
        const redirect=()=>props.history.push('/employees')
props.dispatch(startAddEmployee(formData,redirect))
}
return(
    <div>
        <h2>Add Employees</h2>
        <Form handleSubmit={handleSubmit}/>
    </div>
)
}
export default connect()(EmployeeNew)
