import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    pin: '',
    mobile: '',
    email: '',
    role: 'user',
  });

  const { name, pin, mobile, email,role } = formData;

 

  


  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    console.log(formData);

    
    try {
      const res = await axios.post('http://localhost:5000/register', formData);
      alert(res.data.message);
      navigate("/SignIn");
      // if(res.data.message){
      //   navigate('SingIn');
      // }

    } catch (err) {
      alert(err.response.data.message);
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200 font-poppins">
    <div className="hero-content flex-col lg:flex-row-reverse">
      
        <div className="card w-96 bg-base-100 shadow-2xl">
        <div className='mb-1 mt-4 text-center'>
<h1 className='my-1 text-2xl font-bold flex mx-auto w-[100px]'>SignUp</h1>

</div>
<form onSubmit={onSubmit} className="card-body">
      <input type="text" name="name" value={name} onChange={onChange} placeholder="Name" required className="input input-bordered" />
      <input type="text" name="pin" value={pin} onChange={onChange} placeholder="5-digit PIN" required className="input input-bordered"/>
      <input type="text" name="mobile" value={mobile} onChange={onChange} placeholder="Mobile Number" required  className="input input-bordered"/>
      <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required className="input input-bordered" />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="user">User</option>
                  <option value="agent">Agent</option>
                </select>
      <div className="form-control mt-6">
                    <input className="btn bg-[#1da1f2] text-white hover:bg-[#3488bd]" type="submit" value="Sign Up" />
                </div>
                <p className="text-center"><small className="w-[200px] mx-auto">Already have an account <Link to="/SignIn"><span className="text-[red]">SignIn</span></Link></small></p>
    </form>
                    
            
           
          
            
        
        </div>


    </div>
</div>
  );
};

export default Signup;