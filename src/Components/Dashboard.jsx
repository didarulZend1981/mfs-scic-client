import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Dashboard = () => {
  
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  console.log("user-----",user);
  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem('token');

      console.log(token);
      if (!token) {
        navigate("/SignIn");
        return;
      }

      try {
        const res = await axios.get('http://localhost:5000/dashboard', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data.user);
        console.log(res.data);
      } catch (err) {
        localStorage.removeItem('token');
        //  navigate("/SignIn");
      }
    };

    fetchDashboard();
  }, [history]);


  return (
    <div>
      <h2>wellcome dashbord</h2>
    </div>
  );
};

export default Dashboard;