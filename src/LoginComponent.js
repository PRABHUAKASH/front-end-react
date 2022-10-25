import React, { useState } from 'react';
import axios from 'axios';
// import {useNavigate} from 'react-router-dom';
 import {Typography, TextField, Button} from '@mui/material';

function LoginComponent () {
    const [formData,setFormData] = useState({
        email:"" ,
         password:"",
        });
        const handleSubmit = async (e) =>{
            e.preventDefault();
            const response = await axios.post("http://localhost3001/register/signin",{...formData,})
            console.log(response);
        }
    return(
        <div >
             <Button style={{paddingleft:"500px"}} variant="outlined"  >HOME</Button>
            <form onSubmit={handleSubmit}>
            <div style={{margin:"10%", paddingLeft:"30%"}}>
       <Typography  variant='h4'>Signin Yourself!!!</Typography><br/>
        <TextField id="standard-basic" label="Email" variant="standard" type="email" name='email'
        value ={formData.email}
        onChange={(e) => setFormData({...formData,email:e.target.value})}
        /><br/>
        <TextField id="standard-basic" label="Password" variant="standard"  type="password" name='password'
        value ={formData.password}
        onChange={(e) => setFormData({...formData,password:e.target.value})}
        /><br/><br/>
        <Button variant="contained" type="submit">SIGNIN</Button>
       </div>
        </form>
       
        </div>
    )
}

  

export default LoginComponent;