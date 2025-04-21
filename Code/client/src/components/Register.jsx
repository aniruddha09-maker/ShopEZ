// import React, { useContext, useState } from 'react'
// import { GeneralContext } from '../context/GeneralContext';

// const Register = ({setIsLogin}) => {

//   const {setUsername, setEmail, setPassword, setUsertype, register} = useContext(GeneralContext);


//   const handleRegister = async (e) =>{
//     e.preventDefault();
//     await register()
//   }
//   return (
//     <form className="authForm">
//         <h2>Register</h2>
//         <div className="form-floating mb-3 authFormInputs">
//             <input type="text" className="form-control" id="floatingInput" placeholder="username"
//                                                        onChange={(e)=> setUsername(e.target.value)} />
//             <label htmlFor="floatingInput">Username</label>
//         </div>
//         <div className="form-floating mb-3 authFormInputs">
//             <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com"
//                                                        onChange={(e)=> setEmail(e.target.value)} />
//             <label htmlFor="floatingInput">Email address</label>
//         </div>
//         <div className="form-floating mb-3 authFormInputs">
//             <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
//                                                        onChange={(e)=> setPassword(e.target.value)} /> 
//             <label htmlFor="floatingPassword">Password</label>
//         </div>
//         <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" 
//                                                       onChange={(e)=> setUsertype(e.target.value)}>
//           <option value="">User type</option>
//           <option value="admin">Admin</option>
//           <option value="customer">Customer</option>
//         </select>
        
//         <button className="btn btn-primary" onClick={handleRegister}>Sign up</button>
//         <p>Already registered? <span onClick={()=> setIsLogin(true)}>Login</span></p>
//     </form>
//   )}
// export default Register;


import React, { useState } from 'react';

const Register = ({ setIsLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usertype, setUsertype] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          usertype,
        }),
      });

      const data = await res.json();
      console.log(data);
      // You can show a success message or redirect to login
      alert('Registration successful!');
    } catch (err) {
      console.error('Registration error:', err);
      alert('Something went wrong');
    }
  };

  return (
    <form className="authForm" onSubmit={handleRegister}>
      <h2>Register</h2>
      
      <div className="form-floating mb-3 authFormInputs">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="floatingInput">Username</label>
      </div>

      <div className="form-floating mb-3 authFormInputs">
        <input
          type="email"
          className="form-control"
          id="floatingEmail"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="floatingEmail">Email address</label>
      </div>

      <div className="form-floating mb-3 authFormInputs">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>

      <select
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
        value={usertype}
        onChange={(e) => setUsertype(e.target.value)}
      >
        <option value="">User type</option>
        <option value="admin">Admin</option>
        <option value="customer">Customer</option>
      </select>

      <button type="submit" className="btn btn-primary">Sign up</button>
      <p>Already registered? <span onClick={() => setIsLogin(true)}>Login</span></p>
    </form>
  );
};

export default Register;