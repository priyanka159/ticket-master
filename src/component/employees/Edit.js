import React from 'react'
import Form from './Form'
import {connect} from 'react-redux'
import {startUpdateEmployee} from '../../actions/employeesAction'
function EmployeeEdit(props){
    const handleSubmit=(formData)=>{
        const redirect=()=>props.history.push('/employees')
props.dispatch(startUpdateEmployee(formData,props.match.params.id,redirect))
    }
return(
    <div>
        <h2>Employee Edit</h2>
        <Form handleSubmit={handleSubmit}/>
    </div>
)
}
export default connect()(EmployeeEdit)