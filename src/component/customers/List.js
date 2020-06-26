import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { startSetCustomers } from '../../actions/customersAction'
import {startRemoveCustomer} from '../../actions/customersAction'
function List(props){
    //     // if(this.props.customer.length==0){
//     //     this.props.dispatch(startSetCustomers())
//     // }
    const handleRemove=(id)=>{
        const confirmRemove=window.confirm("Are you sure!!")
  if(confirmRemove){
      props.dispatch(startRemoveCustomer(id))
  }
    }
    return(
        <div>
<h2>Listing Customers-{props.customer.length}</h2>
<ul>
    {props.customer.map(cus=>{
        return <li key={cus._id}>
            <Link to={`/customers/${cus._id}`}>{cus.name}</Link> {cus.email}
            <button onClick={()=>{
                handleRemove(cus._id)
            }}>Remove</button>
            </li>
    })}
</ul>
<Link to="/customers/new">Add Customer</Link>
        </div>
    )
}
const mapStateToProps=(state)=>{
        return{
        customer:state.customer
        }
    }
export default connect(mapStateToProps)(List)
// class List extends React.Component{
// constructor(props){
//     super(props)
//     this.state={

//     }
// }
// render(){
//     console.log(this.props.customer.length,'hii')
//     // if(this.props.customer.length==0){
//     //     this.props.dispatch(startSetCustomers())
//     // }
//     return(
//         <div>
//             <h2>{this.props.customer.name}Hii</h2>
//             <h2>Listing Customers-{this.props.customer.length}</h2>
//        <ul>
//            {this.props.customer.map(cus=>{
//                return <li key={cus._id}>{cus.name}</li>
//            })}
//        </ul>
//         </div>
//     )
// }
// }
// const mapStateToProps=(state)=>{
//     return{
//     customer:state.customer
//     }
// }
// export default connect(mapStateToProps)(List)