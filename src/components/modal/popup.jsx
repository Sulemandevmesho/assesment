import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import LoginModal from './loginModal';
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
const Popup = (props) => {
  const [showEmail, setShowEmail] = useState(false);

  return(
    <Modal open={Boolean(props.opened)} onClose={props.closed}>
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
            <div className="row" style={{border: "1px solid black", borderRadius: "25px"}}>
              <div className="col-sm-5 p-2" style={{textAlign: "left"}}>
                <i className="fa fa-phone"></i>
                <h3>휴대폰 인증</h3>
                <p>고객님 명의의 휴대폰으로 인증</p>
              </div>
              <div className="col-sm-5 p-2" style={{textAlign: "right"}}>
                <button className='btn btn-primary' onClick={() => setShowEmail(!showEmail)}>인증하기</button>
              </div>
            </div>
          </>):(
          <>
            <div className="text-center">
              <div>
                <label>
                  <input type="radio" name="radio"/>
                  youremail@gmail.com
                </label>
              </div>
              <div>
                <button className="btn btn-primary mt-5" onClick={props.closedModal}>로그인</button>
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
export default Popup;
