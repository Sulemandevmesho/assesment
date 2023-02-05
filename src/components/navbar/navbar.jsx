import { useEffect, useRef, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import LoginModal from "../modal/loginModal";
import Popup from "../modal/popup";

const Navbar = () => {
  const navigation = useNavigate();
  //const [search,setSearch]=useState();
  const search=useRef(null);
  const [showSearch, setShowSearch] = useState(false);
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const openLoginModal = () => setLoginModal(true);
  const closeLoginModal = () => setLoginModal(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit=(e)=>{
    e.preventDefault();
    let value=search.current.value;
    console.log(value)
    navigation(`search/${value}`);

  }
  return (
    <nav className="navbar navbar-expand-lg container">
      {!showSearch ? (
      <>
        <Link className="navbar-brand" to='/'>
          logo logo
        </Link>
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
              <a className="nav-link" href="#" onClick={() => setShowSearch(!showSearch)}>
                <i className="fa fa-search"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="fa fa-light fa-globe"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={openModal} style={{cursor: "pointer"}}>
                로그인{">"}
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary" type="button" >
                검사시작
              </button>
            </li>
          </ul>
        </div>
        {loginModal && <LoginModal opened = {handleOpen} closed = {handleClose} closedModal = {closeLoginModal}/>}
        {modal && <Popup open={open} opened = {handleOpen} closed = {handleClose} closedModal = {closeModal}/>}
      </> ) :
      <>
        <div className="navbar-nav " style={{ flex: 1 }}>
          <form onSubmit={handleSubmit} style={{width: "90%"}}>
          <input type="text" style={{width: "90%", borderRadius: "100px", padding: ".5rem", border: "1px solid #EBEBEB"}}  placeholder="검색어를 입력해 주세요" ref={search} />
          </form>
        </div>
        <div className="navbar-nav">
          <span style={{cursor: "pointer"}} onClick={() => setShowSearch(!showSearch)}>X</span>
        </div>
      </>}
    </nav>
  );
};
export default Navbar;
