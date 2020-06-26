import React from 'react'
import {connect} from 'react-redux'
import DepartmentForm from './form'
import {Link} from 'react-router-dom'
import {startGetDepartment,startRemoveDepartment,startAddDepartment} from '../../actions/departmentAction'
function DepartmentList(props){

    const handleSubmit=(formData)=>{
        props.dispatch(startAddDepartment(formData))
    }
    if(props.department.length==0){
    props.dispatch(startGetDepartment())
    }
    const handleRemove=(id)=>{
const confirmRemove=window.confirm("Are you sure")
if(confirmRemove){
    props.dispatch(startRemoveDepartment(id))
}
    }
return(
    <div>
        <h2>Listing Departments-{props.department.length}</h2>
<ul>
    {props.department.map(dep=>{
        return<li key={dep._id}>{dep.name}
        <Link to={`/departments/${dep._id}`}>Show</Link>
        <button onClick={()=>{handleRemove(dep._id)}}>Remove</button>
        </li>
    })}
</ul>
<h3>Add Departments</h3>
<DepartmentForm handleSubmit={handleSubmit}/>
   </div>

)


}

const mapStateToProps=(state)=>{//this state contain customer,department
    return{
        department:state.department
    }
}
export default connect(mapStateToProps)(DepartmentList)