import React from 'react'
import { useState } from 'react'
 const  SignUpObj=()=> {
  
    const[userForm,setUSerForm]=useState({firstName:'',email:'',password:''})
//     const formSubmit=(e)=>{
//    e.preventDefault();
//    console.log (setUSerForm(e.target.value));
//     }
  
const handleChange=(e)=>{
    setUSerForm({
...userForm,
[e.target.name]: e.target.value,
});
}
    return (
    <div>
     <form>
      {/* <input type='text' placeholder='enter firstName' onChange={(e)=>setUSerForm({...userForm,firstName:e.target.value})}/>
      <input type='email' placeholder='enter email'onChange={(e)=>setUSerForm({...userForm,email:e.target.value})} />
      <input type='password' placeholder='enter password' onChange={(e)=>setUSerForm({...userForm,password:e.target.value})} /> */}

 <input name='firstName' onChange={handleChange}/>
 <input name='email' onChange={handleChange}/>
<input name='password' onChange={handleChange}/>
      <p>hi:-{userForm.firstName}</p>
      <p>hi:-{userForm.email}</p>
      <p>hi:-{userForm.password}</p>
      </form>
    </div>
  )
}
export default SignUpObj;