import React from 'react';
import { axiosWithAuth } from '../axiosWithAuth.js';
import AddFriend from './AddFriend'

class FriendsList extends React.Component {
    state = {
      friends: [],
      isLoading: false
    };
  
    componentDidMount() {
      this.getData();
    }
  
    getData = () => {
      this.setState({
        ...this.state,
        isLoading: true
      })
      axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
          this.setState({
            friends: res.data,
            isLoading: false
          })
          })
        .catch(err => console.log(err.response));
    };
   
    render() {
      
      return (
        <div>
          <h1>Your friends list.</h1>
       {this.state.isLoading ? "Loading" : ""}
       {this.state.friends.map(i => {
            return <div key={i.id}>{i.name}, {i.age}, {i.email}</div>
          })}
          <AddFriend getData={this.getData} />
        </div>
      );
    }
  }
  
  export default FriendsList;