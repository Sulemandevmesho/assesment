import "./LoginModal.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const LoginModal = ({ opened, closed, closedModal,mail,reset}) => {
  const navigate=useNavigate();
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50rem",
    bgcolor: 'background.paper',
    borderRadius:'5px',
    boxShadow: 24,
    p: 4,
  };
  
  
  let mailPattern = /^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/;
  let passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16})/;
  const [mailData,setMailData]=useState('');
  const [password,setPassword]=useState('');
  const [mailValid,setMailValid]=useState(true);
  const [passwordValid,setPasswordValid]=useState(true);

  useEffect(()=>{
    if(!mailPattern.test(mailData)){
      setMailValid(false);
    }else{
      setMailValid(true);
    }
  },[mailData]);
  useEffect(()=>{
    if(!passwordPattern.test(password)){
      setPasswordValid(false);
    }else{
      setPasswordValid(true);
    }
  },[password]);
  const hendleLogin=(e)=>{
    e.preventDefault();
    if(!mailValid){
      alert("올바른 형식을 사용하십시오")
    }else if(!passwordValid){
      alert("올바른 형식을 사용하십시오")
    }
    if(mailData===""){
      alert("이메일을 입력하세요");
    }else if(password===''){
      alert("암호를 입력");
    }
    else if(mailData==="suleman@gmail.com"&& password ==="As200120#"){
      
      alert("웰컴!로그인 성공");
      closedModal();
      
    }else
    alert("귀하의 기록을 찾을 수 없습니다");
    
  }
  return (
    <Modal open={Boolean(opened)} onClose={closedModal}>
      <Box container="div" sx={style}>
        <div style={{ textAlign: "right" }}>
          <p style={{ cursor: "pointer" }} onClick={closedModal}>
            X
          </p>
        </div>
        
          <div className="row">
            <h2 style={{ textAlign:"center",fontWeight:900}}>로그인</h2>
          </div>
          <div className="row">
            <form className="">
              <div className="form-group login">
                <label
                  htmlFor="email"
                  style={{ textAlign: "left", alignItems: "left" }}
                >
                  이메일 주소
                </label>
                <div className="icon">
                  <i className="fa fa-envelope"></i>
                  <input type="email" value={mailData} onChange={(e)=>setMailData(e.target.value)} className={mailValid?"form-control":"error form-control"} style={{ paddingLeft:"2rem"}} placeholder="이메일 주소" name="email" />
                </div>
                
              </div>

              <div className="form-group login">
                <label htmlFor="password">비밀번호</label>
                <div className="icon">

                <i className="fa fa-lock"></i>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className={passwordValid?"form-control":"error form-control"} style={{ paddingLeft:"2rem"}} placeholder="비밀번호" name="password" />
                </div>
                
              </div>
              <div style={{marginTop:40,display:"flex",alignItems:"center",justifyContent:"center" ,flexDirection:"column"}}>
              <button className="btn btn-primary  " style={{width:'40%'}} onClick={hendleLogin} >로그인</button>
              <br />
              <button className="btn btn-outline-primary" onClick={()=>{
                closedModal();
                navigate('/serviseagreement');
              }} style={{width:'40%'}} >회원가입</button>
              </div>
              <div className="row" style={{marginTop:20}}>
                <Link to="#" className="col-2 offset-4" onClick={()=>{
                  closedModal();
                  mail();
                }}>이메일 찾기</Link>
                
                <Link to="#" className="col-3 " onClick={()=>{
                  closedModal();
                  reset();
                }}>비밀번호 재설정</Link>
              </div>
              
            </form>
          </div>
        
      </Box>
    </Modal>
  );
};
export default LoginModal;
