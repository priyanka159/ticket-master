import React from 'react'
import Form from './Form'
import {connect} from 'react-redux'
import {startAddCustomer} from '../../actions/customersAction'
function CustomerNew(props){
    let handleSubmit=(formData)=>{
        const redirect=()=>props.history.push('/customers')
props.dispatch(startAddCustomer(formData,redirect))
}
return(
    <div>
        <h2>Add Customers</h2>
        <Form handleSubmit={handleSubmit}/>
    </div>
)
}
//import { startAddCustomer } from '../../actions/customersAction'
export default connect()(CustomerNew)
//adding customer object--make it parent and handle edit and add form--which is same 