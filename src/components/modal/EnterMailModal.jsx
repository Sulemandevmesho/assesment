import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useRef, useState } from 'react';
import './EnterMailModal.css';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "50rem",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const EnterMailModal = (props) => {
  const [showEmail, setShowEmail] = useState(false);
  const [mail,setMail]=useState(false);
const hendleMail=(e)=>{
  setMail(e.target.value);
}
const mailRef =useRef(null);
const hendleSubmit=(e)=>{
  e.preventDefault();
  
  if(mail){        
    props.closedModal();}
    else{
      mailRef.current.style.border="1px solid red";
    }
}
  return(
    <Modal open={Boolean(props.opened)} onClose={props.closedModal}>
      <Box container="div" sx={style}>
        <div style={{textAlign:"right"}}>
          <p style={{cursor: "pointer"}} onClick={props.closedModal}>X</p>
        </div>
        {!showEmail ? (
          <>
            <div className="text-center">
              <h3>이메일 찾기</h3>
            </div>
            <div className="text-center">
              <p>회원 정보에 등록한 휴대폰 번호로 인증합니다.</p>
            </div>
            <div className="  mail-icon" style={{border: "1px solid black", borderRadius: "25px"}}>
              <div className=" " style={{alignContent:"end"}}>
              <i className="fa fa-mobile  fa-4x " ></i>
              </div>
              
             
              <div className="" style={{textAlign: "left"}}>
                
                <h3>휴대폰 인증</h3>
                <p>고객님 명의의 휴대폰으로 인증</p>
              </div>
              <div className="button" style={{textAlign: "right"}}>
                <button className='btn btn-primary' onClick={() => setShowEmail(!showEmail)}>인증하기</button>
              </div>
            </div>
          </>):(
          <>
            <div className="text-center">
              <div>
                <h2>이메일 찾기</h2>
                <p>고객님의 회원 정보와 일치하는 이메일 입니다.</p>
                <hr />
                <label ref={mailRef} style={{display:"flex",alignItems:"center",justifyContent:"center",padding:5}}>
                  <input type="radio" name="radio" onClick={hendleMail} style={{marginRight:5}}/>
                  youremail@gmail.com
                </label>
              </div>
              <div>
                <button className="btn btn-primary mt-5" onClick={hendleSubmit}>로그인</button>
              </div>
              <div>
                <button className="btn m-2">비밀번호 찾기</button>
              </div>
            </div>
          </>
          )
        }
      </Box>
    </Modal>
  )
}
export default EnterMailModal;
