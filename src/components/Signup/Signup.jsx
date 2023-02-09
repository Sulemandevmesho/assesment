import { useEffect, useState } from "react";
import './Signup.css';
import ErrorModal from "../modal/ErrorModal";
import SignupBgImg from "../../svg/signupBgImg.svg";
import { useNavigate } from "react-router";

const Signup = () => {
const navigate=useNavigate();
  let mailPattern = /^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/;
  let passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16})/;
  
const [formData,setFormData]=useState({
  fullName:"",
  email:"",
  otp:"",
  password:"",
  confirmPassword:""
});
const [mailValid,setMailValid]=useState(true);
const [nameValid,setNameValid]=useState(true);
const [passwordValid,setPasswordValid]=useState(true);
const [isMatch,setIsMatch]=useState(false);
const [emailClick,setEmailClick]=useState(false);
const [otpClick,setOtpClick]=useState(false);
const [otpValid,setOtpValid]=useState(true);
const handleChange=(e)=>{
  const {name,value}=e.target;
  setFormData((formData)=>{
    return{ 
      ...formData,
      [name]:value
    }    
  });
}
useEffect(()=>{
  
  if(formData.fullName==="xyz"){
    setIsSubmit(false);
    setNameValid(false);
    alert("닉네임이 이미 존재합니다.");
  }else if(formData.fullName!==''){
    setIsSubmit(true);
    setNameValid(true);
  }
},[formData.fullName])
useEffect(()=>{
  if(formData.confirmPassword!==formData.password){
    
  setIsMatch(false);
  }else{
    setIsMatch(true);
  }
},[formData.confirmPassword])

useEffect(()=>{
  let optPattren=/^[0-9]{6}/
  
  if(!optPattren.test(formData.otp) && formData.otp!==''){
    
    setOtpValid(false);
    setOtpClick(false);
  }
  else{
    setOtpValid(true);
  }
},[formData.otp])
useEffect(()=>{
  if(!mailPattern.test(formData.email) && formData.email!=''){
    setMailValid(false);
  }else if(formData.email==="abc@xyz.xyz"){
    setIsSubmit(false);
    setMailValid(false);
    alert("이메일이 이미 존재합니다");
  }else{
    setIsSubmit(false);
    setMailValid(true);
  }
},[formData.email]);
useEffect(()=>{
  if(!passwordPattern.test(formData.password)  && formData.password!=''){
    setPasswordValid(false);
  }else{
    setPasswordValid(true);
  }
},[formData.password]);
const handleMailClick=(e)=>{
  e.preventDefault();
  if(mailValid && formData.email!==''){
    setEmailClick(!emailClick);
  }
}
const handleOtpClick=(e)=>{
  e.preventDefault();
  if(formData.otp!==''){setOtpClick(!otpClick)}else{
    setOtpClick(false);
    setOtpValid(false);
  }
}
  const [isSubmit,setIsSubmit]=useState(false);
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.fullName===''){
      setIsSubmit(false);
      setNameValid(false);
    }else if(mailValid && formData.email===''){
      setIsSubmit(false);
    }else if(passwordValid && formData.password===''){
      setIsSubmit(false);
    }else if( isMatch && formData.confirmPassword===''){
      setIsSubmit(false);
    }else{
      setIsSubmit(true);
    }
    isSubmit ? navigate('/signupsuccess'):openModal();
  }
  return(
  <div className="row">
    <div className="col-sm-12 signup">
      <div className="offset-3 col-6 text-left">
      <h4 className="mt-5 text-center">logo logo</h4>
      <div style={{display:"flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
      <form  style={{textAlign: "left"}}>
        <div className="form-group mt-5">
          <label className="sign-label">닉네임<span style={{color: "red"}}>*</span></label>
          <input name="fullName" onChange={handleChange} value={formData.fullName} type="text" className={nameValid?"form-control":"form-control sign-error"}  placeholder="닉네임"/>
          <small className={nameValid?"form-text text-muted":"red form-text"}>웹사이트 내에서 사용할 닉네임을 입력하세요. (영문 대문자, 소문자, 숫자만 가능)</small>
        </div>
        <img src={SignupBgImg} alt="Singup bg img" style={{
          zIndex: "-10",
          width: "85%",
          height: "80%",
          top: "15%",
          left: "15%",
          position: "absolute",
        }}/>
        <div className="form-group">
          <label className="sign-label">이메일 주소<span style={{color: "red"}}>*</span></label>
          <div style={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
            <input name="email" onChange={handleChange} value={formData.email} style={{flex: 1}} type="email" className={mailValid?"form-control":"form-control sign-error"} placeholder="이메일 주소"/>
            <button className={emailClick?'btn btn-secondary disabled p-2 signbtn':"btn btn-primary p-2 signbtn"} onClick={handleMailClick}>인증번호 받기</button>
          </div>
          {mailValid?"":<small className="red">이메일을 형식에 맞게 입력해주세요.</small>}
        </div>
        <div className="form-group">
          <label className="sign-label">이메일 주소<span style={{color: "red"}}>*</span></label>
          <div style={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
            <input name="otp" onChange={handleChange} value={formData.otp} style={{flex: 1}} type="number" className={otpValid?"form-control":"form-control sign-error"} placeholder="이메일로 수신된 인증번호를 입력해 주세요."/>
            <button className={otpClick?'btn btn-secondary disabled p-2 signbtn':"btn btn-primary p-2 signbtn"} onClick={handleOtpClick}>인증번호 확인</button>
            
          </div>
          <small className="form-text text-muted">형식에 맞는 이메일 주소를 입력한 후 오타가 없는지 재확인해 주세요.</small>
        </div>
        
        
        <div className="form-group">
          <label className="sign-label">비밀번호<span style={{color: "red"}}>*</span></label>
          <input name="password" onChange={handleChange} value={formData.password} type="password" className={passwordValid?"form-control":"form-control sign-error"} placeholder="비밀번호"/>
          <small className="form-text text-muted">대문자, 소문자, 특수문자, 숫자 즁 2종류를 포함하여 8~16자로 입력해 주세요.</small>
        </div>
        <div className="form-group">
          <label className="sign-label">비밀번호 재확인<span style={{color: "red"}}>*</span></label>
          <input name="confirmPassword" onChange={handleChange} value={formData.confirmPassword} type="password" className={isMatch?"form-control":"sign-error form-control"} placeholder="비밀번호 확인"/>
          <small className={isMatch?"form-text text-muted":"red form-text "}>위에 입력하신 비밀번호를 한번 더 입력해 주세요.</small>
        </div>
        
          <label className="sign-label col-12">휴대폰 인증<span style={{color: "red"}}>*</span></label>
          <button type="button" className="btn btn-primary col-4">인증하기</button>
        
        <div className="text-center mt-5">
          <button  className="btn btn-outline-primary col-3 m-1">이전</button>
          <button  className="btn btn-primary col-3 m-1" onClick={handleSubmit}>가입하기</button>
        </div>
      </form>
      </div>
      {modal && <ErrorModal open={open} opened = {handleOpen} closed = {handleClose} closedModal = {closeModal}/>}
    </div>
    </div>
    </div>
  )
}
export default Signup;
