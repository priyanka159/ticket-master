// import React from 'react'
// import {BrowserRouter,Link,Route} from 'react-router-dom'
// import Home from './components/Home'
// import Register from './users/register'
// import Login from './users/login'
// import CustomerList from './components/customers/List'
// import CustomerNew from './components/customers/New'
// function App(props){
//   console.log(props)
//   const handleLogout=()=>{
//     localStorage.removeItem('authToken')
//     window.location.href='/account/login'
//   }
//   return(
//     <BrowserRouter>
//     <div>
//       <h1>Ticket Master</h1>
//       <Link to="/">Home</Link>
//       {
//         localStorage.getItem('authToken')?
//         (
//           <div>
//             <Link to="/customers"> Customers</Link>
//             <Link to ="#" onClick={handleLogout}>Logout</Link>
//             </div>
//         )
//         :
//         (
//           <div>
//                <Link to ="/account/login">Login</Link>
//       <Link to="/account/register">Register</Link>
//             </div>
//         )
//       }
   
//       <Route path="/" component={Home} exact ={true}/>
//       <Route path="/account/register" component={Register}/>
//       <Route path="/account/login" component={Login}/>
//       <Route path="/customers" component={CustomerList} exact={true}/>
//       <Route path="/customers/new" component={CustomerNew} />
//     </div>
//     </BrowserRouter>
//   )
// }
// export default App
import React from 'react'
import {BrowserRouter,Route,Link,Switch,withRouter} from 'react-router-dom'
import Login from './components/auth/Login'
import {connect} from 'react-redux'
import Register from './components/auth/Register'
import Account from './components/Account'
import DepartmentList from './component/department/List'
import DepartmentShow from './component/department/Show'
import Edit from './component/department/Edit'
import List from './component/customers/List'
import CustomerShow from './component/customers/Show'
import New from './component/customers/New'
import CustomerEdit from './component/customers/Edit'

import EmployeeList from './component/employees/List'
import EmployeeShow from './component/employees/Show'
import EmployeeNew from './component/employees/New'
import EmployeeEdit from './component/employees/Edit'

import TicketList from './component/tickets/List'
import TicketShow from './component/tickets/Show'
import TicketNew from './component/tickets/New'
import TicketEdit from './component/tickets/Edit'
import { startLogout } from './actions/userAction'
function App(props){
  const handleLogout=()=>{
    props.dispatch(startLogout())
  }
  return(
    <BrowserRouter>
    <div>
      <h1>Ticket Master</h1>
      <Link to="/">Home</Link>
      {Object.keys(props.user).length==0?
      <div>
      <Link to="/users/login">Login</Link>
      <Link to="/users/register">Register</Link>
     
     </div>
     :
     <div>
       <Link to="/customers">Customers</Link>
       <Link to="/departments">Department</Link>
       <Link to="/employees">Employee</Link>
       <Link to="/tickets">Tickets</Link>
        <Link to="/users/account">Account</Link>
      <Link to="/users/logout" onClick={()=>{
        handleLogout( )
      }}> Logout</Link>
       </div>
}
<Switch>
      <Route path="/users/register" component={Register}/>
      <Route path="/users/login" component={Login}/>
      <Route path="/users/account" component={Account}/>
      <Route path="/customers" component={List} exact={true}/>
      <Route path="/customers/new" component={New}/>
      <Route path="/customers/edit/:id" component={CustomerEdit}/>
      <Route path="/customers/:id" component={CustomerShow}/>
     
     
     <Route path="/departments" component={DepartmentList} exact={true}/>
     <Route path="/departments/edit/:id" component={Edit}/>
     <Route path="/departments/:id" component={DepartmentShow}/>
     
     <Route path="/employees" component={EmployeeList} exact={true}/>
    
     <Route path="/employees/new" component={EmployeeNew}/>
     <Route path="/employees/edit/:id" component={EmployeeEdit}/>
     <Route path="/employees/:id" component={EmployeeShow}/>

<Route path="/tickets" component={TicketList} exact={true}/>
<Route path="/tickets/new" component={TicketNew}/>
<Route path="/tickets/edit/:id" component={TicketEdit}/>
<Route path="/tickets/:id" component={TicketShow}/>
      </Switch>
    </div>
    </BrowserRouter>
  )
}
const mapStateToProps=(state)=>{
  return{
    user:state.user
  }
}
export default connect(mapStateToProps)(App)
