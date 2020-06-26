import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
function TicketShow(props){
    console.log(props.tickets,'hii')
    console.log(props.tickets.employees.length,'ticket--employee...')
  const findCustomer=(id)=>{//id is ticket customer id...
       console.log(id,'hiiii..tickt cus')
    return props.customer.find(cus=>cus._id==id)
    }
    const findDepartment=(id)=>{
        
        return props.department.find(dept=>dept._id==id)
    }
    const findEmployees=(id)=>{
        return props.employees.find(employee => employee._id == id)
    }
    return(
        <div>
            
            <h2>Ticket show--{props.tickets._id}</h2>
            <p>Customer-{props.tickets.customer.name?props.tickets.customer.name:findCustomer(props.tickets.customer).name}
          <br/> Department-{props.tickets.department.name?props.tickets.department.name:findDepartment(props.tickets.department).name}
           <br/>Employee-{props.tickets.employees[0].name?
          ( props.tickets.employees.map((emp,index)=>(index===props.tickets.employees.length-1)?`${emp.name}`: `${emp.name}, `))
           :findEmployees(props.tickets.employees[0]._id).name}
        {/* //    (props.tickets.employees.map((emp,index)=>(index===props.tickets.employees.length-1)?
        //    `${findEmployees(emp).name}`: `${this.findEmployees(emp).name}, `))} */}
            <br/>{props.tickets.message}<br/>{props.tickets.code}
            <Link to={`/tickets/edit/${props.tickets._id}`}>Edit</Link>
            </p>
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    console.log(props,"ticket..show")
    return{
tickets:state.tickets.find(ticket=>ticket._id==props.match.params.id),
customer:state.customer,
department:state.department,
employees:state.employees
}
}
export default connect(mapStateToProps)(TicketShow)