import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
function DepartmentShow(props){
    console.log(props,"depart...")
    return(
        <div>
<h2>Department show-{props.department._id}</h2>
<p>{props.department.name}   <Link to={`/departments/edit/${props.department._id}`}>Edit</Link></p>

        </div>
    )
}
const mapStateToProps=(state,props)=>{
    return{
    department:state.department.find(dep=>dep._id==props.match.params.id)
}
}
export default connect(mapStateToProps)(DepartmentShow)