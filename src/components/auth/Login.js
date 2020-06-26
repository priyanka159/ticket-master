
import React from 'react'
import {connect} from 'react-redux'
import {startLogin} from '../../actions/userAction'
class Login extends React.Component{
    constructor(){
        super()
this.state={
  
    email:'',
    password:''
}
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            email:this.state.email,
            password:this.state.password
        }
     console.log(formData)
     this.props.dispatch(startLogin(formData,this.props))
    }
    render(){
        console.log(this.props,'hii')
        return(
            <div>
                <h2>Login with us</h2>
                <form onSubmit={this.handleSubmit}>
                 
                <label htmlFor="email">email</label>
                    <input type="text" id="email" name="email" 
                    value={this.state.email} onChange={this.handleChange}/><br/><br/>
               <label htmlFor="password">password</label>
                    <input type="text" id="password" name="password" 
                    value={this.state.password} onChange={this.handleChange}/><br/><br/>
             <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}
export default connect()(Login)