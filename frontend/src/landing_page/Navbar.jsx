import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "white" }}
    >
      <div className="container">
        <Link className="nav-link" to="/"><img
          src="media/images/logo.svg"
          className="img-fluid"
          style={{ width: "130px" }}
          alt="logo"
        /></Link>
        

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ms-3">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>
            <li className="nav-item ms-3">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item ms-3">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item ms-3">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item ms-3">
              <Link className="nav-link" to="/support">Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
