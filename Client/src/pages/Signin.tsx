import { Link } from "react-router-dom";
// Axios
import axios from "axios";
// States
import { useState } from "react";
export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesignin = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3005/api/v1/signin",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      );
      console.log(response);
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <>
      <Link to="/signup">Signup</Link>
      <Link to={"/"}>Home</Link>
      <section>
        <form onSubmit={(e) => handlesignin(e)} action="">
          <input
            className="text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            className="text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button type="submit">Signin</button>
        </form>
      </section>
    </>
  );
}
