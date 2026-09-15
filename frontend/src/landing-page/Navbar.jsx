const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom sticky-top p-3"
      style={{ backgroundColor: "#fff" }}
    >
      <div class="container p-2">
        <a class="navbar-brand" href="#">
          <img
            src="media/images/logo.svg"
            alt="zerodha logo"
            className="w-25"
          />
        </a>
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
              <a class="nav-link active mx-3" aria-current="page" href="#">
                Signup
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active mx-3" aria-current="page" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active mx-3" aria-current="page" href="#">
                Products
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active mx-3" aria-current="page" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active mx-3" aria-current="page" href="#">
                Support
              </a>
            </li>
          </ul>
          <form class="d-flex" role="search"></form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
