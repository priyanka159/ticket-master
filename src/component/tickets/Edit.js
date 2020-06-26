import React from 'react'
import TicketForm from './form'
import {connect} from 'react-redux'
import {startUpdateTicket} from '../../actions/ticketAction'
function TicketEdit(props){
    const handleSubmit=(formData)=>{
        const redirect=()=>props.history.push('/tickets')
props.dispatch(startUpdateTicket(formData,props.match.params.id,redirect))
    }
    return(
        <div>
          <h2>Edit tickets--</h2>
          <TicketForm handleSubmit={handleSubmit}/>
        </div>
    )
}
export default connect()(TicketEdit)