import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
function CustomerShow(props){
  
    return(
        <div>
            
            {props.custom?(
                <div>
                     <h2>Customer Show-{props.custom._id}</h2>
            <p>{props.custom.name} {props.custom.email} {props.custom.mobile}</p>
            <Link to={`/customers/edit/${props.custom._id}`}>Edit</Link>
    <Link to="/customers">Back</Link>
    
                    </div>
            )
            :(
                //page reloading handling..
                <div>
                    Loading.....
                    </div>
            )
}
            
           
          
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    console.log(state,'h')
    return{
        custom:state.customer.find(cus=>cus._id==props.match.params.id)//return that object
    }
}
export default connect(mapStateToProps)(CustomerShow)