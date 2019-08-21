import React, {useState} from "react";
import { axiosWithAuth } from '../axiosWithAuth.js';

const AddFriend = (props) => {
  const [entry, setEntry] = useState({
    name: "",
    age: "",
    email: ""
})
  
const handleSubmit = (e) => {
  e.preventDefault();
  axiosWithAuth()
      .post('http://localhost:5000/api/friends', entry)
      .then(res => {
          props.getData();
          setEntry({
            name: "",
            age: "",
            email: ""
          })
        })
      .catch(err => {
          console.log("Err", err.response)
        })
  
}

const handleChange = (e) => {
  setEntry({...entry,
      [e.target.name]: e.target.value})
}  
      return (
        <div>
        <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            value={entry.name} 
            name="name" 
            placeholder="Name"
            onChange={handleChange} 
            />
 <input 
            type="number" 
            value={entry.age} 
            name="age" 
            placeholder="Age"
            onChange={handleChange} 
            />
             <input 
            type="email" 
            value={entry.email} 
            name="email" 
            placeholder="Email"
            onChange={handleChange} 
            />
        <button>Add</button>
    </form>
        </div>
      );
  
  }
  
  export default AddFriend;