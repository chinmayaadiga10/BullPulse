import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom sticky-top p-3"
      style={{ backgroundColor: "#fff" }}
    >
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="zerodha logo"
            className="w-25"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mb-lg-0 px-5">
            <li class="nav-item">
              <Link
                class="nav-link active mx-3"
                aria-current="page"
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active mx-3"
                aria-current="page"
                to="/about"
              >
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active mx-3"
                aria-current="page"
                to="/products"
              >
                Products
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active mx-3"
                aria-current="page"
                to="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active mx-3"
                aria-current="page"
                to="/support"
              >
                Support
              </Link>
            </li>
          </ul>
          <form class="d-flex" role="search"></form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
