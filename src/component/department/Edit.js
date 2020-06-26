import React from 'react'
import DepartmentForm from './form'
import {connect} from 'react-redux'
import {startUpdateDepartment} from '../../actions/departmentAction'
function Edit(props){
    console.log(props,'hii edit')
   const  handleSubmit=(formData)=>{
    const redirect=()=>props.history.push('/departments')
props.dispatch(startUpdateDepartment(formData,props.match.params.id,redirect))
    }
return(
    <div>
        Edit
        <DepartmentForm handleSubmit={handleSubmit}/>
    </div>
)
}
export default connect()(Edit)