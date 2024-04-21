import { Link } from "react-router-dom";
// // Axios
import axios from "axios";
// // States
import { useState } from "react";
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
      window.location.href = "/Dashboard";
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
            <label
              className="hover:underline hover:text-primary"
              htmlFor="forgot password!"
            >
              Forget password?
            </label>
            <Link to="/signup">
              <label
                className="hover:underline hover:text-primary"
                htmlFor="don't have an account?"
              >
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
