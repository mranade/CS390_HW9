import {useState} from "react";
import {json, Link, useNavigate} from "react-router-dom";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (password == "password") {
      navigate('/index')
    }
    else {
      window.alert("Incorrect Password, please try again. (Password is password)")
  }
}
  return (
    <><h1>Please enter Login Information:</h1><form onSubmit={handleSubmit}>
      <input
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value)} />
      <div>
        <input
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        ></input>
      </div>
      <button>Login</button>
    </form></>
  );
}
