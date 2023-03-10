import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ResetPasswordModal from "../modal/ResetPasswordModal";
import EnterMailModal from "../modal/EnterMailModal";
import FindMailModal from "../modal/FindMailModal";
import LoginModal from "../modal/LoginModal";
import SorryModal from "../modal/sorryModal";
import "./resetPassword.css";
const ResetPassword = () => {
  const [valid, setvalid] = useState(true);

  const [resetPasswordModal, setResetPasswordModal] = useState(false);
  const [enterMailModal, setEnterMailModal] = useState(false);
  const [findMailModal, setFindMailModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [sorryModal, setSorryModal] = useState(false);
  //const []
  const openResetPasswordModal = () => setResetPasswordModal(true);
  const closedResetPasswordModal = () => setResetPasswordModal(false);
  const openFindMailModal = () => setFindMailModal(true);
  const closedFindMailModal = () => setFindMailModal(false);
  const openEmailEnterModal = () => setEnterMailModal(true);
  const closedEmailEnterModal = () => setEnterMailModal(false);
  const openLoginModal = () => setLoginModal(true);
  const closedLoginModal = () => setLoginModal(false);
  const openSorryModal = () => setSorryModal(true);
  const closedSorryModal = () => setSorryModal(false);
  //

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
  
  const pass = useRef();
  const cpass = useRef();

  const handelPassword = (e) => {
    setPassword(pass.current.value);
  };
  let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16})/;

  useEffect(() => {
    if (password === confirmPassword) {
      
      setConfirmPasswordValid(true);
      
    } else {
      
      setConfirmPasswordValid(false);
     
    }
  }, [confirmPassword]);
  useEffect(()=>{
     if (pattern.test(password)) {
        setPasswordValid(true);
       
      } else {
        setPasswordValid(false);
        
      }
  },[password]);
  
  const handelConfirmPassword = (e) => {
    setConfirmPassword(cpass.current.value);
  };
  const handlesubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <div className="row" style={{ padding: "5%" }}>
      {!valid ? (
        <div className="mt-5" style={{ padding: "10%" }}>
          <h2 style={{ textAlign: "left" }}>???????????? ?????????</h2>
          <hr />
          <div style={{ textAlign: "left" }}>
            <p style={{ fontSize: "1.4rem", fontWeight: "400" }}>
              ???????????? ????????? ????????? ?????????????????? ?????????????????????.
            </p>
            <p style={{ fontSize: "1.4rem", fontWeight: "400" }}>
              ??????????????? ???????????? ???????????????.
            </p>
          </div>
          <Link
            onClick={openResetPasswordModal}
            style={{ display: "flex", fontSize: "1.4rem", fontWeight: "bold" }}
            to="#"
          >
            ???????????? ?????????
          </Link>
        </div>
      ) : (
        <>
          <div
            className="col-sm-12"
            style={{ textAlign: "left", paddingLeft: "4%" }}
          >
            <h4>???????????? ????????? </h4>
            <hr />
          </div>
          <div
            className="col-sm-7"
            style={{ textAlign: "left", float: "left" }}
          >
            <form onSubmit={handlesubmit}>
              <div className="form-group mt-3">
                <label style={{ paddingLeft: "8%" }}>
                  ????????? ??????????????? ??????????????????.
                </label>
                <div className="icon">
                  <i
                    className="fa fa-lock"
                    style={{ left: "7%", fontSize: "1.5rem" }}
                  ></i>
                  <input
                    type="password"
                    name="password"
                    className={
                      passwordValid
                          ? "form-control"
                          : "note-valid form-control"
                        
                    }
                    style={{ paddingLeft: "3rem" }}
                    placeholder="????????????"
                    ref={pass}
                    onChange={handelPassword}
                  />
                </div>
                <p
                  className="form-text text-muted"
                  style={{ marginLeft: "7%" }}
                >
                  ?????????, ?????????, ????????????, ?????? ??? 2????????? ???????????? 8~16??????
                </p>
                <p
                  className="form-text text-muted"
                  style={{ marginLeft: "7%" }}
                >
                  ????????? ?????????.
                </p>
              </div>
              <div className="form-group mt-3">
                <label style={{ paddingLeft: "8%" }}>
                  ????????? ??????????????? ?????? ?????? ??? ??????????????????.
                </label>
                <div className="icon ">
                  <i
                    className="fa fa-lock "
                    style={{ left: "10%", fontSize: "1.5rem" }}
                  ></i>
                  <input
                    type="password"
                    ref={cpass}
                    value={confirmPassword}
                    name="confirmPassword"
                    onChange={(e) => handelConfirmPassword(e)}
                    className={
                      confirmPasswordValid
                          ? "form-control"
                          : "note-valid form-control"
                    }
                    style={{ paddingLeft: "3rem" }}
                    placeholder="???????????? ?????????"
                  />
                </div>
              </div>
              <button
                type="submit"
                style={{ marginLeft: "7%" }}
                className="col-4 btn btn-primary mt-4"
              >
                ???????????? ??????
              </button>
            </form>
          </div>
        </>
      )}
      {enterMailModal && (
        <EnterMailModal
          opened={enterMailModal}
          closed={!enterMailModal}
          closedModal={closedEmailEnterModal}
        />
      )}
      {findMailModal && (
        <FindMailModal
          opened={findMailModal}
          closed={!findMailModal}
          closedModal={closedFindMailModal}
          sorry={openSorryModal}
        />
      )}
      {sorryModal && (
        <SorryModal
          opened={sorryModal}
          closed={!sorryModal}
          closedModal={closedSorryModal}
          mail={openEmailEnterModal}
          reset={openResetPasswordModal}
        />
      )}
      {loginModal && (
        <LoginModal
          opened={loginModal}
          closed={closedLoginModal}
          closedModal={closedLoginModal}
          mail={openEmailEnterModal}
          reset={openResetPasswordModal}
        />
      )}
      {resetPasswordModal && (
        <ResetPasswordModal
          opened={resetPasswordModal}
          closed={!resetPasswordModal}
          mail={openEmailEnterModal}
          find={openFindMailModal}
          closedModal={closedResetPasswordModal}
          login={openLoginModal}
        />
      )}
    </div>
  );
};
export default ResetPassword;
