import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <h1>Stranger's things</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
