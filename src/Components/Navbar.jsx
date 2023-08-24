import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <h1>Stranger's things</h1>
      <Link to="/">
        <h2>Home</h2>
      </Link>
      <Link to="/Posts">
        <h2>Post</h2>
      </Link>
      <Link to="/Login">
        <h2>Login</h2>
      </Link>
    </div>
  );
}
