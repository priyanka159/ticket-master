import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {startAddDepartment} from '../../actions/departmentAction'
class DepartmentForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:this.props.department?this.props.department.name:''
        }
    }
    handleSubmit=(e)=>{
e.preventDefault()
const formData={
   name:this.state.name 
}
//this.props.dispatch(startAddDepartment(formData))
this.props.handleSubmit(formData)
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
render(){
    console.log(this.props,'department of form')
    return(
        <div>
            <h2>Form</h2>
            <form onSubmit={this.handleSubmit}>
            <input type="text" id="name" name="name" 
                    value={this.state.name} onChange={this.handleChange}/><br/><br/>
            </form>
        </div>
    )
}
}
const mapStateToProps=(state,props)=>{
    console.log(props,'maps')
    return{
        department:state.department.find(dept=>dept._id==props.match.params.id)
    }
}
export default withRouter(connect(mapStateToProps)(DepartmentForm))