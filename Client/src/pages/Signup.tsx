import { Link } from "react-router-dom";
// // Axios
import axios from "axios";
// // States
import { useState } from "react";
import Signinput from "../components/Props/Signinput";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handlesignup = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/signup",
        {
          email: email,
          password: password,
          name: username,
        },
        { withCredentials: true }
      );
      // redirect to signin page
      window.location.href = "/Signin";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="pt-[100px]">
        <form
          onSubmit={(e) => handlesignup(e)}
          className="w-full h-full flex flex-col items-center justify-center gap-4"
          action=""
        >
          <h1 className="text-3xl font-semibold">SIGN UP</h1>
          <div className="w-full max-w-[350px]">
            <Signinput
              title="Username"
              value={username}
              setvalue={setUsername}
              type="text"
              placeholder="Example : Mahdi Tija....."
            />
            <Signinput
              title="Email"
              value={email}
              setvalue={setEmail}
              type="Email"
              placeholder="Example : ....@example.com"
            />
            <Signinput
              title="Password"
              value={password}
              setvalue={setPassword}
              type="password"
              placeholder="Example : **********"
            />
          </div>
          <div className="w-full max-w-[350px] flex justify-between font-semibold ">
            <Link className="GLinks" to="/signin">
              Already have an account?
            </Link>
          </div>
          <button type="submit" className="sign-btn">
            SIGN UP
          </button>
        </form>
      </section>
    </>
  );
}
