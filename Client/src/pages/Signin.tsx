import { Link } from "react-router-dom";
// // Axios
import axios from "axios";
// // States
import { useState } from "react";

// Props
import Signinput from "../components/Props/Signinput";
export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesignin = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/signin",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      );
      // redirect to dashboard page
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="pt-[100px]">
        <form
          onSubmit={(e) => handlesignin(e)}
          className="w-full h-full flex flex-col items-center justify-center gap-4"
          action=""
        >
          <h1 className="text-3xl font-semibold">SIGN IN</h1>
          <div className="w-full max-w-[350px]">
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
            <label className="GLinks" htmlFor="forgot password!">
              Forget password?
            </label>
            <Link to="/signup">
              <label className="GLinks" htmlFor="don't have an account?">
                Don't have an account?
              </label>
            </Link>
          </div>
          <button type="submit" className="sign-btn">
            SIGN IN
          </button>
        </form>
      </section>
    </>
  );
}
