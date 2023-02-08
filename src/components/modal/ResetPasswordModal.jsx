import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useEffect, useRef, useState } from 'react';
import './ResetPasswordModal.css'
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
const ResetPasswordModal = ({opened,closed,closedModal,mail,find,login}) => {
  const [verify, setVerify] = useState(false);
  const [mailData,setMailData]=useState('');
  const [isValid,setIsValid]=useState(false);
  let pattern = /^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/;
  useEffect(()=>{
     if(!pattern.test(mailData)){
      setIsValid(false);
     }else{
      setIsValid(true);
      
     }
      
  },[mailData])
  const hendleMail=(e)=>{
    setMailData(e.target.value);
    
  }
  return(
    <Modal open={Boolean(opened)} onClose={closedModal}>
      <Box container="div" sx={style}>
        <div style={{textAlign:"right"}}>
          <p style={{cursor: "pointer"}} onClick={closedModal}>X</p>
        </div>
        
            <div className="text-center">
              <h3>비밀번호 재설정  </h3>
              
            </div>
            <div className="text-center">
              <p>재설정 링크를 전달 받을 이메일을 입력해주세요.</p>
            </div>
            
              <div className="form-group ">
                <label
                  htmlFor="email"
                  className="form-labe"
                >
                  이메일 주소
                </label>
                <div className="icon" >
                  <i className="fa fa-envelope "></i>
                  <input type="text" value={mailData} onChange={hendleMail}  name="email" className={isValid?'form-control':'error form-control '} style={{ paddingLeft:"2rem",textAlign: "left", alignItems: "left"}} placeholder="이메일 주소"  />
                </div>
              
            </div>
            <div>
              <div className="row text-center mt-4">
                <button className='btn btn-primary offset-4 col-4 ' onClick={() => {
                  closedModal();
                  find();
                }}>보내기</button>
                <button className='btn btn-outline-primary offset-4 col-4 mt-3' onClick={()=>{
                  closedModal();
                  login();
                }}>로그인</button>
                <button className='btn mt-3' onClick={()=>{
                  closedModal();
                  mail();
                  
                }}>이메일 찾기</button>
              </div>
            </div>
         
      </Box>
    </Modal>
  )
}
export default ResetPasswordModal;
