import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate  } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    pin: '',
  });

  const { email, pin } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
   
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/login', formData);
      localStorage.setItem('token', res.data.token);
      console.log("testion --bus",res.data.token);
      alert('Login successful');
      navigate('/dashboard');

    } catch (err) {
      alert(err.response.data.message);
    }
  };



  return (
    <div>
      <div className="hero min-h-screen bg-base-200 font-poppins">
    <div className="hero-content flex-col lg:flex-row-reverse">
      
        <div className="card w-96 bg-base-100 shadow-2xl">
        <div className='mb-1 mt-4 text-center'>
<h1 className='my-1 text-2xl font-bold flex mx-auto w-[100px]'>SignIN</h1>

    </div>

    <form onSubmit={onSubmit} className="card-body">
    <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required className="input input-bordered" />
      <input type="text" name="pin" value={pin} onChange={onChange} placeholder="5-digit PIN" required className="input input-bordered"/>
        
     
      <div className="form-control mt-6">
                    <input className="btn bg-[#1da1f2] text-white hover:bg-[#3488bd]" type="submit" value="SignIN" />
                </div>
                <p className="text-center"><small className="w-[200px] mx-auto">You have no account <Link to="/Signup"><span className="text-[red]">Signup</span></Link></small></p>
    </form>



    </div>
    </div>
    </div>
    </div>
  );
};

export default SignIn;