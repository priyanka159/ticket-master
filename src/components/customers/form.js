import React from 'react'
class CustomerForm extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            email:'',
            mobile:''
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
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile
        }
        this.props.handleSubmit(formData)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type='text' value={this.state.name} onChange={this.handleChange} name="name" id="name"/><br/>
                    <label>email</label>
                    <input type='text' value={this.state.email} onChange={this.handleChange} name="email"/><br/>
                    <label>mobile</label>
                    <input type='text' value={this.state.mobile} onChange={this.handleChange} name="mobile"/>
                
                    <input type='submit'/>
                </form>
            </div>

        )
    }
}
export default CustomerForm