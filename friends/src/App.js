import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login'
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'
import styled from 'styled-components'
import './App.css'

const FB = styled.div`
display:flex;
flex-direction:column;
width: 700px;
height: 100%;
margin: 0 auto;
align-items: space-between;
justify-content: space-between;
`

const FBHead = styled.div`
width: 350px;
padding-left: 350px;
padding-bottom: 10px;
background-color: #3B5998;
`

const FBBody = styled.div``

const App = () => {
  return (
    <Router>
      <FB>
        <FBHead><h1>[ facebookish ]</h1>
        <Link to="/login">login</Link> <Link to="/protected">my friends</Link>
        </FBHead>
        <div><h1>Admin Tools</h1>
        <button onClick={(e) => {
          localStorage.removeItem('token')
          window.alert("Removed token! Good luck with testing.")
          }}>Clear Local Storage</button></div>

        <FBBody>
        <p>[ Welcome to Thefacebook ]</p>
 
 <p>Thefacebook is an online directory that connects people through social networks at colleges.
 We have opened up Thefacebook for popular consumption at:</p>
 
 <p>BC • Berkeley • Brown • BU • Chicago • Columbia • Cornell • Dartmouth • Duke 
 Emory • Florida • Georgetown • Harvard • Illinois • Michigan • Michigan State 
 MIT • Northeastern • Northwestern • NYU • Penn • Princeton • Rice • Stanford 
 Tulane • Tufts • UC Davis • UCLA • UC San Diego • UNC
 UVA • WashU • Wellesley • Yale</p>
 <p>Your facebook is limited to your own college or university.</p>
 
 <p>You can use Thefacebook to:</p>
 <ul>
   <li>Search for people at your school</li>
   <li>Find out who is in your classes</li>
   <li>Look up your friends' friends</li>
   <li>See a visualization of your social network</li>
   </ul>

<p> To get started, click below to register. If you have already registered, you can log in.
</p>
 
        </FBBody>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FriendsList} />
      </FB>
    </Router>
  );
}

export default App;
