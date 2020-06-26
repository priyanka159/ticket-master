import React from 'react';
import {connect} from 'react-redux'
class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <div>
        <h2>User Account Info</h2>
        <h2>{this.props.user.username}</h2>
        <h2>{this.props.user.email}</h2>
    </div>
    );
  }
}

const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}
export default connect(mapStateToProps)(Account);
