function NavBar() {
  return (
    <div>
      <nav id="navBar" class="navbar navbar-expand-lg fixed-top">
        <a class="navbar-brand" href="#">
          alexxygg
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div>☰</div>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About Me
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <span class="navbar-text">alexxygg@gmail.com</span>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
