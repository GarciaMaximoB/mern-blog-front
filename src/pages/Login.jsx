import { useContext, useState } from "react";
import {Navigate} from "react-router-dom"
import {UserContext} from "../context/UserContext"

export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false)
  const {setUserInfo} = useContext(UserContext)

  async function login(evt) {
    evt.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials:'include',
    });

    if(response.ok){
      response.json().then(userInfo=>{
        setUserInfo(userInfo)
        setRedirect(true)
      })
      
    } else{
      alert("credenciales incorrectas")
    }
  }

  if(redirect){
    return <Navigate to={'/'}/>
  }

  return (
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(evt) => setUserName(evt.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
      />
      <button>Login</button>
    </form>
  );
}
