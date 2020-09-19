import React,{useState} from 'react';
import { Link ,useHistory} from 'react-router-dom';
import "./Login.css";
import {auth} from './firebase';

function Login() {
  const history = useHistory();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  // console.log("email is--> ",email);
  const signIn=(e)=>{
    //to prevent refreshing
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then(resAuthuser=>{
     if(resAuthuser){
       history.push('/');
     }
    })
    .catch(err=>alert(err.message))
  }

  const register=(e)=>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then((resAuthuser)=>{
      //it successfully created a new user with email and password
      if(resAuthuser){
        history.push('/');
      }
    })
    .catch(err=>alert(err.message))
  }

  return (
    <div className="login">
     <Link to="/">
        <img
          className="login__logo"
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
          />
     </Link>
     <div className="login__container">
       <h1>Sign-in</h1>
       <form>
         <h5>E-mail</h5>
         <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
         <h5>Password</h5>
         <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
         <button type="submit" onClick={signIn} className='login__signinButton'>Sign In</button>
       </form>
       
       <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Actually no terms
          and conditions are included Nikita's amazon-clone.(This website
          is the part of my projects)
       </p>
        <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
     </div>
    </div>
  )
}

export default Login
