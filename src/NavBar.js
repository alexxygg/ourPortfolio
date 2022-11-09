import { useRef } from "react";

function NavBar() {
  const theButton = useRef(null);

  const clickHandler = () => {
    theButton.current.focus();
  };

  return (
    <div>
      <nav id="navBar" className="navbar navbar-expand-lg fixed-top">
        <a className="navbar-brand">alexxygg</a>

        <button
          className="navbar-toggler btn"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div>☰</div>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#odd">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <span className="navbar-text">alexxygg@gmail.com</span>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
