import {  useRef, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import LoginModal from "../modal/LoginModal";
import EnterMailModal from "../modal/EnterMailModal";
import ResetPasswordModal from "../modal/ResetPasswordModal";
import FindMailModal from "../modal/FindMailModal";
import SorryModal from "../modal/sorryModal";
import DropDown from "../DropDown/DropDown";
import './navbar.css'
const Navbar = ({show}) => {
  const search=useRef(null);
  const navigation = useNavigate();
  
  const [showSearch, setShowSearch] = useState(false);
  const [open, setOpen] = useState(false);
  const [mailModal, setMailModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [findMailmodal,setFindMailModal]=useState(false);
  const [resetModal, setResetModal] = useState(false);
  const [sorryModal,setSorryModal]=useState(false); 
  //to  login modal 
  const openLoginModal = () => setLoginModal(true);
  const closeLoginModal = () => setLoginModal(false);
  // to mail modal
  const openMailModal =()=>setMailModal(true);
  const closeMailModel=()=>setMailModal(false);
  //find mail
  const openFindMailModal =()=>setFindMailModal(true);
  const closeFindMialModal=()=>setFindMailModal(false);


//to resetpassword modal modal 
  
  const openResetModal = () => setResetModal(true);
  const closeResetModal = () => setResetModal(false);
  const heandleResetPass=()=>{
    closeLoginModal();
    setResetModal(true);
    }
  // warning modal
   const openSorryModal = () => setSorryModal(true);
   const closeSorryModal = () => setSorryModal(false);
  
   const heandleMailModal=()=>{
    closeLoginModal();
    setMailModal(true);
  }
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
          className="navbar-toggler humburger"
          type="button"
          onClick={show}
        >
          <span className="fa fa-bars"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" style={{ flex: 1 }}>
            <li className="nav-item active">
              <Link className="nav-link" to="/questiontest">
                DNA 질문검사
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                data-bs-toggle="dropdown" aria-expanded="false"
              >
                타입 리포트
              </Link>
              
        <DropDown />
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/questiontest">
                54DNAtype
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="#">
                학습유전자
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="#" onClick={() => setShowSearch(!showSearch)}>
                <i className="fa fa-search"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">
                <i className="fa fa-light fa-globe"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#" onClick={openLoginModal} style={{cursor: "pointer"}}>
                로그인{">"}
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary" type="button"  >
                검사시작
              </button>
            </li>
          </ul>
        </div>
        {/*here modal shown*/}
        {mailModal && <EnterMailModal  opened = {mailModal} closed = {!mailModal} closedModal = {closeMailModel} />}
        {findMailmodal && <FindMailModal opened={findMailmodal} closed={!findMailmodal} closedModal={closeFindMialModal} sorry={openSorryModal}/>}
        {sorryModal && <SorryModal opened={sorryModal} closed={!sorryModal} closedModal={closeSorryModal} mail={openMailModal} reset={heandleResetPass}/>}
        {loginModal && <LoginModal opened = {loginModal} closed = {!loginModal} closedModal = {closeLoginModal} mail={openMailModal} reset={heandleResetPass}/>}
        {resetModal && <ResetPasswordModal opened={resetModal} closed={!resetModal} closedModal={closeResetModal} mail={openMailModal} login={openLoginModal} find={openFindMailModal}/>}
      </> ) :
      <>
        <div className="navbar-nav " style={{ flex: 1 }}>
          <form onSubmit={handleSubmit} className="icon" style={{width: "90%"}}>
            <i className="fa fa-search "></i>
          <input className="search form-control " type="text" style={{ paddingLeft:"3rem",borderTopLeftRadius:25,borderBottomLeftRadius:25,borderBottomRightRadius:25,borderTopRightRadius:25}}  placeholder="검색어를 입력해 주세요" ref={search} />
           
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
