import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const navigate = useNavigate();   

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const[show,setShow]=useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    setMessage(data.message);

    console.log(data);
    console.log("Login attempted");

    
    if (response.ok) {
      
      localStorage.setItem("token", data.token);

      setMessage("");
      navigate("/dashboard");
    }
    else{
      console.log("Login failed");
      setMessage(data.message || "Login failed");
    }
  };

  return (
    <div className="Loginform">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type={show ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          
        />
        <button type="button" onClick={() => setShow(!show)} style={{  right: "10px"}}>👁️</button>
        <button type="submit">Login</button>

        <p>{message}</p>
      </form>
    </div>
  );
}

export default Login;
