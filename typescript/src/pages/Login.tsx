import { useState } from "react";
import { login, logout } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const Login = () => {
  const [userName, setUsername] = useState<string>("");
  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.myUser.value);
  return (
    <div>
      {username}
      <Link to={"/"}>Home</Link>
      <input type="text" onChange={(ev) => setUsername(ev.target.value)} />
      <button onClick={() => dispatch(login(userName))}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};
