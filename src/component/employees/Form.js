//props is not define because it doesnot have acces to history.push..use withRoute from 'react-router-dom"
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import {startAddCustomer} from '../../actions/customersAction'
import {startAddEmployee} from '../../actions/employeesAction'
import {connect} from 'react-redux'
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
       name:props.employees?props.employees.name:'',
       email:props.employees?props.employees.email:'',
       mobile:props.employees?props.employees.mobile:'',
       department:props.employees?props.employees.department:''
    };
  }
handleSubmit=(e)=>{
    e.preventDefault()
    const formData={
        name:this.state.name,
        email:this.state.email,
        mobile:this.state.mobile,
        department:this.state.department
    }
  // console.log(formData)
//   let redirect=()=>{this.props.history.push('/employees')}
//     this.props.dispatch(startAddEmployee(formData,redirect))
this.props.handleSubmit(formData)
}
handleChange=(e)=>{
    this.setState({
    [e.target.name]:e.target.value
    })
}
handleDropdown=(e)=>{
    this.setState({
        department:e.target.value
    })
}
  render() {
      console.log(this.props,'form of employees')
         //value={this.state.department}
    return (
     <div>
<h2>Form goes here...</h2>
 {/* <h3>{this.props.customer._id}</h3>  */}
<form onSubmit={this.handleSubmit}>
<label htmlFor="name">name</label>
                    <input type="text" id="name" name="name" 
                    value={this.state.name} onChange={this.handleChange}/><br/><br/>
                <label htmlFor="email">email</label>
                    <input type="text" id="email" name="email" 
                    value={this.state.email} onChange={this.handleChange}/><br/><br/>
               <label htmlFor="mobile">mobile</label>
                    <input type="text" id="mobile" name="mobile" 
    
    value={this.state.mobile} onChange={this.handleChange}/><br/><br/>
     <label>department</label>
            <select name="department"  value={this.state.department} onChange={this.handleDropdown} >
            <option>{this.state.department != '' ?  this.state.department : `Select`}</option>
          

             {this.props.departments.map((dept)=>{
    return(
    <option key={dept._id} name={dept.name} value={dept._id}>{dept.name}</option>
    )
})
}  
      </select><br/>
       <input type="submit" value="ADD EMPLOYEE"/>
</form>
     </div>

    );
  }
}


const mapStateToProps=(state,props)=>{
    return{
        employees:state.employees.find(emp=>emp._id==props.match.params.id),
departments:state.department
    }
}
export default withRouter(connect(mapStateToProps)(Form));
