import React from 'react'
import Form from './Form'
import {connect} from 'react-redux'
import {startUpdateCustomer} from '../../actions/customersAction'
import { Redirect } from 'react-router'
function CustomerEdit(props){
    const handleSubmit=(formData)=>{
        const redirect=()=>props.history.push('/customers')
props.dispatch(startUpdateCustomer(formData,props.match.params.id,redirect))
    }
    console.log('edit page',props)
return(
  
    <div>
        <h2>Edit Customers</h2>
        <Form handleSubmit={handleSubmit}/>
    </div>
)
}
//const mapStateToProps
export default connect()(CustomerEdit)