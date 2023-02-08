import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";
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
const FindMailModal = (props) => {
  return (
    <Modal open={Boolean(props.opened)} onClose={props.closedModal}>
      <Box container="div" sx={style}>
        <div style={{ textAlign: "right" }}>
          <p style={{ cursor: "pointer" }} onClick={props.closedModal}>
            X
          </p>
        </div>
        <div className="text-center">
          <div style={{marginBottom:"10%"}}>
            <span className="fa-stack fa-lg m-3">
              <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
              <i className="fa fa-check fa-5x fa-inverse" style={{backgroundColor:"#FFF",color:"green" ,border:"5px solid green",borderRadius:"100%"}}></i>
              </div>
            </span>
            
          </div>
          <div className="mt-5">
            <p>입력하신 이메일로 재설정 링크가 발송되었습니다.</p>
          </div>
          <div>
            <button
              className="btn btn-primary mt-5"
              onClick={props.closedModal}
            >
              확인
            </button>
          </div>
          <Link to="#" onClick={()=>{
            props.closedModal();
            props.sorry();
          }}>sorry text</Link>
        </div>{" "}
      </Box>
    </Modal>
  );
};
export default FindMailModal;
