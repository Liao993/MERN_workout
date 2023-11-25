import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
