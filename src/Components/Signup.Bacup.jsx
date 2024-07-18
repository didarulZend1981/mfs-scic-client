import { useState } from "react";
import axios from 'axios';

const Signup = () => {
  const [username,setUserName] = useState("");
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  const [role,setRole] = useState("");
  const handleSubmit =async (e) => {
    e.preventDefault();
    const info = { username,email,pass};
   
    try {
      fetch("http://localhost:5000/register", {
        method: "POST",
        
        headers: { "Content-type": "application/json" },
        body:JSON.stringify(info)
      });
      // Redirect to login or show success message
    } catch (error) {
      console.error('Error registering', error);
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
    </form>

            <form onSubmit={onSubmit} className="card-body">
                <div className="form-control">
                 
                   
                    <input type="text"  placeholder="User Name" className="input input-bordered" 
                    onChange={(e)=>setUserName(e.target.value)}
                    />
                   
                </div>
              
                <div className="form-control">
                   
                    <input type="email"   name="email" placeholder="email" className="input input-bordered" 
                     onChange={(e)=>setEmail(e.target.value)}
                    />
                    
                </div>
                <div className="form-control">
                   
                    <input type="password"   placeholder="password" className="input input-bordered"
                     onChange={(e)=>setPass(e.target.value)}
                    />
                   
                </div>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="user">User</option>
                  <option value="agent">Agent</option>
                </select>
                <div className="form-control mt-6">
                    <input className="btn bg-[#1da1f2] text-white hover:bg-[#3488bd]" type="submit" value="Sign Up" />
                </div>
                
                {/* <p className="text-center"><small className="w-[200px] mx-auto">Already have an account <Link to="/login"><span className="text-[red]">Login</span></Link></small></p> */}

            </form>
                    
            
           
          
            
        
        </div>


    </div>
</div>
  );
};

export default Signup;