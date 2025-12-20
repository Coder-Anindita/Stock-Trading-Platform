export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "white" }}
    >
      <div className="container">
        <img
          src="media/images/logo.svg"
          className="img-fluid"
          style={{ width: "130px" }}
          alt="logo"
        />

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
              <a className="nav-link" href="#">Signup</a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link" href="#">Products</a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link" href="#">Support</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
