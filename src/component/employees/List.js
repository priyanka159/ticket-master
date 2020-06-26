import React from 'react'
import {connect} from 'react-redux'
import {startSetEmployees,startRemoveEmployees} from '../../actions/employeesAction'
import {Link} from 'react-router-dom'
function EmployeeList(props){
    if(props.employees.length==0){
        props.dispatch(startSetEmployees())
    }
    const handleRemove=(id)=>{
        const confirmRemove=window.confirm("Are you sure!!")
        if(confirmRemove){
props.dispatch(startRemoveEmployees(id))
    }
}
    return(
        <div>
<h2>Listing Employees--{props.employees.length}</h2>
<ul>
    {props.employees.map(employee=>{
        return<li key={employee._id}>{employee.name} {employee.email}  {employee.mobile} 
        <Link to={`/employees/${employee._id}`}>Show</Link>
        <button onClick={()=>{
            handleRemove(employee._id)
        }}>Remove</button>
        
        </li>
    })}
</ul>
<Link to="/employees/new">Add Employee</Link>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        employees:state.employees
    }
}
export default connect(mapStateToProps)(EmployeeList)