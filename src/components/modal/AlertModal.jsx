import { Modal, Box } from "@mui/material";
import { useNavigate } from "react-router";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: "50rem",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const AlertModal = (props) => {
  const navigate=useNavigate();
  return(
    <Modal open={Boolean(props.opened)} onClose={props.closed}>
      <Box container="div" sx={style}>
        <div style={{textAlign:"right"}}>
          <p style={{cursor: "pointer"}} onClick={props.closedModal}>X</p>
        </div>
        <div className="m-5" style={{display:"flex",justifyContent:"center"}}>
          
              <div style={{display:"flex",alignItems:"center",justifyContent:"center",border:"5px solid red",width:"100px",height:100,borderRadius:"100%"}}>
              <i className="fa fa-exclamation fa-4x fa-inverse" style={{color:"red" }}></i>
              </div>
            
            
          </div>
        <div className="text-center">
          <p>54DNAtype는 학습유전자 타입 질문검사를 무료로 서비스를 진행하고 있으며,<b>마케팅 정보 수신 동의를 하지 않으면 다양한 프로모션에서 제외됩니다.</b>마케팅 정보 수신 동의여부를 체크해주세요.</p>
        </div>
        <div className="text-center">
          <button className="btn btn-outline-primary m-1" type="button" onClick={props.closedModal}>확인</button>
          <button className="btn btn-primary m-1" type="button" onClick={()=>navigate('/join')}>동의하고 다음</button>
        </div>

      </Box>
    </Modal>
  )
}
export default AlertModal;
