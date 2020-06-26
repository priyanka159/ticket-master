import React from 'react'
import {connect} from 'react-redux'
import axios from '../../config/axios'
import {withRouter} from 'react-router-dom'
import {startAddTicket} from '../../actions/ticketAction'
class TicketForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            code:props.tickets?this.props.tickets.code:'',
            customer:props.tickets?props.tickets.customer:'',
            department:props.tickets?props.tickets.department:'',
            emps:[],
            employees:props.tickets?props.tickets.employee:[],
            message:props.tickets?props.tickets.message:'',
            priority:props.tickets?props.tickets.priority:'',
            employeesnew:[]//filter dept..emps
            // code: props.ticket? props.ticket.code: '',
            // customer: props.ticket? props.ticket.customer: '',
            // department: props.ticket? props.ticket.department: '',
            // emps: [],
            // employee: props.ticket? props.ticket.employee: [],
            // employeesnew: [],
            // message: props.ticket? props.ticket.message: '',
            // priority: props.ticket? props.ticket.priority: ''
        }
    }
    handleSelectCustomer=(e)=>{
this.setState({
   customer:e.target.value 
})
    }
    handleSelectDepartment=(e)=>{
        console.log(e.target.value,'deptt')//_id form
        this.setState({
            department:e.target.value
          
        })
        if(e.target.name === 'department'){
            console.log(e.target.value,"checking dept id")
            this.setState({
           employeesnew:this.state.emps.filter(employee=>employee.deptId._id == e.target.value )
       })
       console.log('employeesnew', this.state.employeesnew)
   }
      
        
    }

    handleSelectEmployees=(e)=>{

const value=e.target.value
console.log(value)
const data = { 
   "_id" : value
}
console.log(data,'selectEmploye')
this.setState(prevState => ({
    employees : prevState.employees.concat(data)
}), () => console.log(this.state.employees))
    }
    // employee: prevState.employee.find(emp => emp._id == employee._id) ? 
    // prevState.employee.filter(emp => emp._id != employee._id) : 
    // [].concat(prevState.employee,employee)
    handleChange=(e)=>{
        this.setState({
[e.target.name]:e.target.value
    })
    }


    componentDidMount(){
        axios.get('/employees',{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const employees = response.data

            let emps = []
            employees.map(employee=>{
                return (
                    emps.push({
                        id: employee._id,
                        value: employee._id,
                        label: employee.name,
                        deptId: employee.department,
                    })
                )
            })
            console.log(emps,'arrayemp')//6 recordsss...in emps []
            this.setState({emps})
        })   
    }
    handleSubmit=(e)=>{
e.preventDefault()
const formData={
    code: this.state.code,
    customer: this.state.customer,
    department: this.state.department,
    employees: this.state.employees,
    message: this.state.message,
    priority: this.state.priority
}
console.log(formData,'form..formData')
let redirect=()=>{
    // this.props.history.push('/tickets')
}
this.props.handleSubmit(formData)
//this.props.dispatch(startAddTicket(formData,redirect))
    }
    render(){
        console.log(this.props,'ticket form...')
        return(
            <div>
<h2>Form goes here...</h2>
<form onSubmit={this.handleSubmit}>
<label htmlFor ="code">Code</label>
<input type="text" id="code" value={this.state.code} name="code" onChange={this.handleChange}/><br/><br/>
<label htmlFor ="customer">Customer</label>
<select id="customer" value={this.state.customer} name="customer" onChange={this.handleSelectCustomer}>
<option value="">select</option>
                        {this.props.customers.map(customer=>{
                             return <option key={customer._id} value={customer._id}>{customer.name} </option>
                        })}
    </select><br/><br/><br/>
    <label htmlFor ="department">Department</label>
<select id="department" value={this.state.department} name="department" onChange={this.handleSelectDepartment}>
<option value=" ">select</option>
                        {this.props.departments.map(department=>{
                             return <option key={department._id} value={department._id}>{department.name} </option>
                        })}
    </select><br/><br/><br/>
     
    <label htmlFor ="employees">Employees</label>
<select id="employees" value={this.state.employee} onChange={this.handleSelectEmployees}>
<option value=" ">select</option>
                        {this.state.employeesnew.map(emp=>{
                             return <option key={emp.id} value={emp.id}>{emp.label} </option>
                        })}
    </select><br/><br/><br/>
    <label htmlFor ="message">Message</label><br/>
<textarea  id="message" value={this.state.message} name="message" onChange={this.handleChange}/><br/><br/><br/>

<input type="radio" value="High" checked= {this.state.priority==="High"} onChange={this.handleChange} name="priority"/>{' '}
            High

            <input type="radio" value="Medium" checked= {this.state.priority==="Medium"} onChange={this.handleChange} name="priority"/>{' '}
            Medium
            <input type="radio" value="Low" checked= {this.state.priority==="Low"} onChange={this.handleChange} name="priority"/>{' '}
            Low<br/><br/>
            <input type="submit" value="Submit"/>
</form>

            </div>
        )
    }
}
const mapStateToProps=(state,props)=>{
    return{
customers:state.customer,
departments:state.department,
employees:state.employees,
tickets:state.tickets.find(tkt=>tkt._id==props.match.params.id)
}
}
    export default withRouter(connect(mapStateToProps)(TicketForm))