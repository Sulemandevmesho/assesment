import "./LeftDrawar.css";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "../modal/LoginModal";
import EnterMailModal from "../modal/EnterMailModal";
import ResetPasswordModal from "../modal/ResetPasswordModal";
import FindMailModal from "../modal/FindMailModal";
import SorryModal from "../modal/sorryModal";
const LeftDrawer = ({ show, click }) => {
  const navigate = useNavigate();
  const search = useRef(null);
  const [showSearch, setShowSearch] = useState(false);
  const [mailModal, setMailModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [findMailmodal, setFindMailModal] = useState(false);
  const [resetModal, setResetModal] = useState(false);
  const [sorryModal, setSorryModal] = useState(false);
  //to  login modal
  const openLoginModal = () => {
    setLoginModal(true);
    click();
  };
  const closeLoginModal = () => setLoginModal(false);
  // to mail modal
  const openMailModal = () => setMailModal(true);
  const closeMailModel = () => setMailModal(false);
  //find mail
  const openFindMailModal = () => setFindMailModal(true);
  const closeFindMialModal = () => setFindMailModal(false);
  //to resetpassword modal modal

  const closeResetModal = () => setResetModal(false);
  const heandleResetPass = () => {
    closeLoginModal();
    setResetModal(true);
  };

  // warning modal
  const openSorryModal = () => setSorryModal(true);
  const closeSorryModal = () => setSorryModal(false);
  //seach bar
  const handleSubmit = (e) => {
    e.preventDefault();
    click();
    let value = search.current.value;
    navigate(`search/${value}`);
  };
  return (
    <>
      {show && (
        <div className="">
          {show ? (
            <span className="X" onClick={click}>
              X
            </span>
          ) : (
            <>
              <Link className="navbar-brand " to="/">
                logo logo
              </Link>
              <button
                className="navbar-toggler humburger"
                type="button"
                onClick={click}
              >
                <span className="fa fa-bars"></span>
              </button>
            </>
          )}
          <div className="left-drawer">
            <ul className="navbar-nav mr-auto" style={{ flex: 1 }}>
              <li className="nav-item active">
                <Link className="nav-link" to="/questiontest" onClick={click}>
                  DNA 질문검사
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  onClick={click}
                >
                  타입 리포트
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/questiontest" onClick={click}>
                  54DNAtype
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="#" onClick={click}>
                  학습유전자
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <form onSubmit={handleSubmit} className="icon">
                <i className="fa fa-search search-icon"></i>
                  <input
                    type="text"
                    ref={search}
                    className="form-control search"
                  />
                </form>
                
                  
                
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link" onClick={click}>
                  <i className="fa fa-light fa-globe"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="#"
                  onClick={openLoginModal}
                  style={{ cursor: "pointer" }}
                >
                  로그인{">"}
                </Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary" type="button">
                  검사시작
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
      {/*here modal shown*/}
      {mailModal && (
        <EnterMailModal
          opened={mailModal}
          closed={!mailModal}
          closedModal={closeMailModel}
        />
      )}
      {findMailmodal && (
        <FindMailModal
          opened={findMailmodal}
          closed={!findMailmodal}
          closedModal={closeFindMialModal}
          sorry={openSorryModal}
        />
      )}
      {sorryModal && (
        <SorryModal
          opened={sorryModal}
          closed={!sorryModal}
          closedModal={closeSorryModal}
          mail={openMailModal}
          reset={heandleResetPass}
        />
      )}
      {loginModal && (
        <LoginModal
          opened={loginModal}
          closed={!loginModal}
          closedModal={closeLoginModal}
          mail={openMailModal}
          reset={heandleResetPass}
        />
      )}
      {resetModal && (
        <ResetPasswordModal
          opened={resetModal}
          closed={!resetModal}
          closedModal={closeResetModal}
          mail={openMailModal}
          login={openLoginModal}
          find={openFindMailModal}
        />
      )}
    </>
  );
};
export default LeftDrawer;
