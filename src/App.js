import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from 'firebase';
import { useStateValue } from './StateProvider';
import Footer from './Footer';

function App() {
  const [{},dispatch]= useStateValue();
  //kind of listener
  useEffect(()=>{
   //runs only once when the app component loads
   auth().onAuthStateChanged((authUser) => {
    // console.log("THE USER IS >>> ", authUser);
      if(authUser){
        //user just logged in or it was logged in previously before refresh
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        //user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])
  return (
  <Router>
    <div className="app">
     <Switch>
       {/* make sure that the default route is at bottom */}
       <Route path="/login">
           <Login/>
       </Route>
       <Route path="/checkout">
           <Header />
           <Checkout/>
       </Route>
       <Route path="/">
           <Header />
           <Home />
        <Footer/>
       </Route>
     </Switch>
    </div>
  </Router>
  );
}

export default App;
