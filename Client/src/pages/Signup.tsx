import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <Link to="/signin">Signup</Link>
      <Link to={"/"}>Home</Link>
      <section>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Signin</button>
        </form>
      </section>
    </>
  );
}
