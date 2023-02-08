import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import warning  from "../../svg/warning.svg";
import {Link} from 'react-router-dom'
import { useState } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50rem",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const SorryModal = (props) => {
  return (
    <Modal open={Boolean(props.opened)} onClose={props.closedModal}>
      <Box container="div" sx={style}>
        <div style={{ textAlign: "right" }}>
          <p style={{ cursor: "pointer" }} onClick={props.closedModal}>
            X
          </p>
        </div>
        <div className="text-center">
          <div >
            <h2>죄송합니다.</h2>
          
          </div>
          <div className="mt-5">
            <p>입력하신 이메일로 가입한 내역이 없습니다.</p>
          </div>
          <div>
            <button
              className="btn btn-primary mt-5"
              onClick={props.closedModal}
            >
              확인
            </button>
            <div className="mx-auto">
                <img src={warning} alt="warning"/>
            </div>
            <Link to="#" onClick={()=>{
                props.closedModal();
                props.mail();
            }}>이메일 찾기</Link>
            <Link to="#" onClick={()=>{
                props.closedModal();
                props.reset();
            }}>비밀번호 재설정</Link>
          </div>
        </div>
      </Box>
    </Modal>
  );
};
export default SorryModal;
