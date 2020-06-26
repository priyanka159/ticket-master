import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
function EmployeeShow(props){
    console.log(props,'listEmp')
    return(
        <div>
<h2>Employee show--{props.employees._id}</h2>
<p>{props.employees.name} 
 {props.employees.email}
  {props.employees.mobile}
{props.employees.department.name}
  </p>
  <Link to={`/employees/edit/${props.employees._id}`}>Edit</Link>
  <Link to="/employees">Back</Link>
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    console.log(props,'hiiiiii employee list')
    return{
        employees:state.employees.find(emp=>emp._id==props.match.params.id)
    }
}
export default connect(mapStateToProps)(EmployeeShow)