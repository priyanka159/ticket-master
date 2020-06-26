import React from 'react'
import {startAddTicket} from '../../actions/ticketAction'
import TicketForm from './form'
import {connect} from 'react-redux'
function TicketNew(props){
    let handleSubmit=(formData)=>{
        const redirect=()=>props.history.push('/tickets')
props.dispatch(startAddTicket(formData,redirect))
}
    return(
        <div>
            <h2>Adding Tickets--</h2>
            <TicketForm handleSubmit={handleSubmit}/>
        </div>
    )
}
export default connect()(TicketNew)