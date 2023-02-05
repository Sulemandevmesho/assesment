import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
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
const LoginModal = (props) => {
  const [verify, setVerify] = useState(false);

  return(
    <Modal open={Boolean(props.opened)} onClose={props.closed}>
      <Box container="div" sx={style}>
        <div style={{textAlign:"right"}}>
          <p style={{cursor: "pointer"}} onClick={props.closedModal}>X</p>
        </div>
        {!verify ? (
          <>
            <div className="text-center">
              <h3>비밀번호 재설정</h3>
            </div>
            <div className="text-center">
              <p>재설정 링크를 전달 받을 이메일을 입력해주세요.</p>
            </div>
            <div className="row" style={{textAlign: "left"}}>
              <h3>이메일 주소</h3>
              <div className="col-sm-12" style={{ flex: 1 }}>
                <input type="text" style={{width: "90%", borderRadius: "100px", padding: ".5rem", border: "1px solid #EBEBEB"}} placeholder="이메일 주소"/>
              </div>
            </div>
            <div>
              <div className="row text-center">
                <button className='btn btn-primary' onClick={() => setVerify(!verify)}>인증하기</button>
                <button className='btn' onClick={props.closedModal}>인증하기</button>
                <button className='btn mt-3'>이메일 찾기</button>
              </div>
            </div>
          </>):(
          <>
            <div className="text-center">
              <div>
                <span className="fa-stack fa-lg m-3">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </div>
              <div>
                <p>입력하신 이메일로 재설정 링크가 발송되었습니다.</p>
              </div>
              <div>
                <button className="btn btn-primary mt-5" onClick={props.closedModal}>확인</button>
              </div>
            </div>
          </>
          )
        }
      </Box>
    </Modal>
  )
}
export default LoginModal;
