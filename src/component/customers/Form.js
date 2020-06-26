//props is not define because it doesnot have acces to history.push..use withRoute from 'react-router-dom"
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import {startAddCustomer} from '../../actions/customersAction'
import {connect} from 'react-redux'
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:props.customer?props.customer.name:'',
        email:props.customer?props.customer.email:'',
        mobile:props.customer?props.customer.mobile:''
    };
  }
handleSubmit=(e)=>{
    e.preventDefault()
    const formData={
        name:this.state.name,
        email:this.state.email,
        mobile:this.state.mobile
    }
  //  console.log(formData)
   // this.props.dispatch(startAddCustomer(formData))
this.props.handleSubmit(formData)
}
handleChange=(e)=>{
    this.setState({
    [e.target.name]:e.target.value
    })
}
  render() {
      console.log(this.props,'handleSubmit..')
      
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
       <input type="submit" value="ADD"/>
</form>
     </div>

    );
  }
}

const mapStateToProps=(state,props)=>{
  console.log(props,'map of customer')
    return{
        customer:state.customer.find(cus=>cus._id==props.match.params.id)
    }
}
export default withRouter(connect(mapStateToProps)(Form));
