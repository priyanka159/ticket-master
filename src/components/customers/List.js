import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class CustomerList extends React.Component{
    constructor(){
        super()
        this.state={
            customers:[]
        }
    }
    componentDidMount(){
        axios.get('http://dct-ticket-master.herokuapp.com/customers',{
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
            <h1>Listing Customers-{this.state.customers.length}</h1>
            <Link to="customers/new">Add Customer</Link>

        </div>
        )
    }
}
export default CustomerList