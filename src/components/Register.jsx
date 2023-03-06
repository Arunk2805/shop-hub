import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserToStateAction } from "../store/actions/actions";
import {useNavigate,Link} from "react-router-dom"

const Register = () => {
 

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [users,setUsers] = useState({
    userName :"",
    email:"",
    password:""
  })

  const handleChange =(e)=>{
    let newUser =  {...users}
    newUser[e.target.name] = e.target.value
    setUsers(newUser)
  }

  const {userName,email,password} = users

  const addUsers = (users)=>{
    // console.log("added users",users)
    dispatch(addUserToStateAction(users))
    navigate("/login")
    clearForm()
  }

  const clearForm = ()=>{
    setUsers({
      userName :"",
      email:"",
      password:""
    })
  }
  return (
    <div>
      <form >
      <div className="box-center p-2">
        
        <h3 className="py-3 ">Sign Up Here</h3>
        <input type="text" name="userName" className="input-field" placeholder="User Name " value={userName} onChange={(e)=>{handleChange(e)}}/>

        <input type="email" name="email" className="input-field" placeholder="Email" value={email} onChange={(e)=>{handleChange(e)}} />

        <input type="password" name="password" className="input-field" value={password} placeholder="Password"  onChange={(e)=>{handleChange(e)}} />

        <div className="">
          <button className="btn btn-primary" type="button" onClick={()=>addUsers(users)}>Sign Up</button>
        </div>
        <div className="">
          <Link to={"/login"} className="text-decoration-none"> <p  className="signUp-link"> Already have an account ?</p></Link>
        </div>
        
      </div>
      </form>
    </div>
  );
};

export default Register;
