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
          <h2 style={{ textAlign: "left" }}>비밀번호 재설정</h2>
          <hr />
          <div style={{ textAlign: "left" }}>
            <p style={{ fontSize: "1.4rem", fontWeight: "400" }}>
              비밀번호 재설정 링크가 만료되었거나 잘못되었습니다.
            </p>
            <p style={{ fontSize: "1.4rem", fontWeight: "400" }}>
              비밀번호가 변경되지 않았습니다.
            </p>
          </div>
          <Link
            onClick={openResetPasswordModal}
            style={{ display: "flex", fontSize: "1.4rem", fontWeight: "bold" }}
            to="#"
          >
            비밀번호 재설정
          </Link>
        </div>
      ) : (
        <>
          <div
            className="col-sm-12"
            style={{ textAlign: "left", paddingLeft: "4%" }}
          >
            <h4>비밀번호 재설정 </h4>
            <hr />
          </div>
          <div
            className="col-sm-7"
            style={{ textAlign: "left", float: "left" }}
          >
            <form onSubmit={handlesubmit}>
              <div className="form-group mt-3">
                <label style={{ paddingLeft: "8%" }}>
                  새로운 비밀번호를 입력해주세요.
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
                    placeholder="비밀번호"
                    ref={pass}
                    onChange={handelPassword}
                  />
                </div>
                <p
                  className="form-text text-muted"
                  style={{ marginLeft: "7%" }}
                >
                  대문자, 소문자, 특수문자, 숫자 즁 2종류를 포함하여 8~16자로
                </p>
                <p
                  className="form-text text-muted"
                  style={{ marginLeft: "7%" }}
                >
                  입력해 주세요.
                </p>
              </div>
              <div className="form-group mt-3">
                <label style={{ paddingLeft: "8%" }}>
                  새로운 비밀번호를 다시 한번 더 입력해주세요.
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
                    placeholder="비밀번호 재입력"
                  />
                </div>
              </div>
              <button
                type="submit"
                style={{ marginLeft: "7%" }}
                className="col-4 btn btn-primary mt-4"
              >
                비밀번호 저장
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
