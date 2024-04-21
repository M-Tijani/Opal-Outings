import { Link } from "react-router-dom";
// // Axios
import axios from "axios";
// // States
import { useState } from "react";
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
          <div className="relative w-full max-w-[350px] mt-6">
            <input
              className="sign-input"
              type="text"
              placeholder="Example : Mahdi Tij....."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="absolute bottom-11 left-6 font-semibold">
              Username
            </label>
          </div>
          <div className="relative w-full max-w-[350px] mt-6">
            <input
              className="sign-input"
              type="email"
              placeholder="Example : .....@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="absolute bottom-11 left-6 font-semibold">
              Email
            </label>
          </div>
          <div className="relative w-full max-w-[350px] mt-6">
            <input
              className="sign-input"
              type="password"
              placeholder="Example : **********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="absolute bottom-11 left-6 font-semibold">
              Password
            </label>
          </div>
          <div className="w-full max-w-[350px] flex justify-between font-semibold ">
            <Link className="hover:underline hover:text-primary" to="/signin">
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
