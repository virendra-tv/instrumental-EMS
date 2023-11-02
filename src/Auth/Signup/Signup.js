// import React from 'react'

// const signup = () => {
//   return (
//     <div>signup</div>
//   )
// }

// export default signup
import React, { useState } from "react";
import Img from '../../Assets/Background.jpg'
import Music from '../../Assets/music.png'


import "./signup.css"; // Import the CSS file for styling

function Register() {
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    // Here, you can add your user registration logic
  
  };

  return (

    <div className='inner_container'>
          <img src={Img} className='img-back'/>
        <div className='container-s'>     
    <div className="conainer-s2">
      <div className="register-container"> <div><img src={Music} className='music-1'/></div> 
      <div><h1>User Registration</h1></div>
      </div>  
      </div>
         
      <div className='input_con'>
          <div className='common_div'>
           <div className='input_div'>
             <label for="EmailInput" className='email'>Your Name</label>
             <input type="text" className="form-control" id="EmailInput" name="EmailInput" placeholder="Enter Name" />
              <small id="emailHelp" ></small>
           </div>
           
           <div className='input_div'>
             <label for="EmailInput" className='email'>Your email</label>
             <input type="text" className="form-control" id="EmailInput" name="EmailInput" placeholder="Enter email" />
              <small id="emailHelp" ></small></div>
            </div>
      </div>

      <div className='input_con'>
          <div className='common_div'>
           <div className='input_div'>
             <label for="EmailInput" className='email'>Your Name</label>
             <input type="text" className="form-control" id="EmailInput" name="EmailInput" placeholder="Enter Name" />
              <small id="emailHelp" ></small>
           </div>
           
           <div className='input_div'>
             <label for="EmailInput" className='email'>Your email</label>
             <input type="text" className="form-control" id="EmailInput" name="EmailInput" placeholder="Enter email" />
              <small id="emailHelp" ></small></div>
            </div>
      </div>


      <div className='input_con'>
          <div className='common_div'>
           <div className='input_div'>
             <label for="EmailInput" className='email'>Your Name</label>
             <input type="text" className="form-control" id="EmailInput" name="EmailInput" placeholder="Enter Name" />
              <small id="emailHelp" ></small>
           </div>
           
           {/* <div className='input_div'>
             <label for="EmailInput" className='email'>Your email</label>
             <input type="text" className="form-control" id="EmailInput" name="EmailInput" placeholder="Enter email" />
              <small id="emailHelp" ></small></div> */}
            </div>
      </div>


      












    </div>
    </div>
  

  );
}

export default Register;
