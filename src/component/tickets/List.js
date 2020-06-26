import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startSetTicket,startRemoveTicket} from '../../actions/ticketAction'
function TicketList(props){
    if(props.tickets.length==0){
        props.dispatch(startSetTicket())
    }
    const handleRemove=(id)=>{
 let confirm=window.confirm('Are you sure')
 if(confirm){
     props.dispatch(startRemoveTicket(id))
 }
    }
return(
    <div>
      <h2>Listing Ticket-{props.tickets.length}</h2>  
      <ul>
          {props.tickets.map(ticket=>{
              return<li key={ticket._id}>{ticket.code} {ticket.message}
              <Link to={`/tickets/${ticket._id}`}>Show</Link>
              <button onClick={()=>{handleRemove(ticket._id)}}>Remove</button>
              </li>
          })}
      </ul>
      <Link to="/tickets/new">Add Tickets</Link>
    </div>
)
}
const mapStateToProps=(state)=>{
return{
    tickets:state.tickets
}
}
export default connect(mapStateToProps)(TicketList)