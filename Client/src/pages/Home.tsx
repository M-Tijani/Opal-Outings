import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Link to="/signin">Signin</Link>
      <Link to="/signup">Signup</Link>
    </>
  );
}
