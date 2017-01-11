import React, {Component} from 'react';
import User from './User';

export default class UserList extends Component{
  constructor(props){
    super(props);
    this.state={filter: ''}
  }

  onHandleChange(evt){
    this.setState({filter: evt.target.value});
  }

  render(){
    const users = this.props.users;
    const filter = this.state.filter.toLowerCase();

    return(
      <div>
        <h1>Users</h1>
        <input
          type="text"
          onChange={this.onHandleChange.bind(this)}
        />
        <ul>
          {users.filter(user => user.name.toLowerCase().indexOf(filter)>-1).map((user,i)=><User key={i} user={user}/>)}
        </ul>
      </div>
    )
  }

}
