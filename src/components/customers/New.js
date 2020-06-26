import React from 'react'
import CustomerForm from './form'
import axios from 'axios'
class CustomerNew extends React.Component{
    handleSubmit=(formData)=>{
        axios.post('http://dct-ticket-master.herokuapp.com/customers',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            console.log(response.data)
        })
    }
render(){
    return(
        <div>
            <h1>Add Customers</h1>
          <CustomerForm handleSubmit={this.handleSubmit}/>
        </div>
    )
}
}
export default CustomerNew