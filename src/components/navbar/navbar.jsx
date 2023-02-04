const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg container">
      <a className="navbar-brand" href="#">
        logo logo
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto" style={{ flex: 1 }}>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              DNA 질문검사{" "}
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              타입 리포트
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              54DNAtype
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              학습유전자
            </a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fa fa-search"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i class="fa fa-light fa-globe"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              로그인{">"}
            </a>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-success" type="submit">
              검사시작
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
