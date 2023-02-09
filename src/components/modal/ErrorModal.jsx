import { Modal, Box } from "@mui/material";
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
const ErrorModal = (props) => {
  return(
    <Modal open={Boolean(props.opened)} onClose={props.closed}>
      <Box container="div" sx={style}>
        <div style={{textAlign:"right"}}>
          <p style={{cursor: "pointer"}} className="fs-2" onClick={props.closedModal}>X</p>
        </div>
        <div className="m-5" style={{display:"flex",justifyContent:"center"}}>
          
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",border:"5px solid red",width:"100px",height:100,borderRadius:"100%"}}>
          <i className="fa fa-exclamation fa-4x fa-inverse" style={{color:"red" }}></i>
          </div>
        
        
      </div>
        <div className="text-center">
          <h3>이미 등록되어 있는 이메일 입니다.</h3>
        </div>
        <div className="text-center">
          <button className="btn btn-primary col-4 mt-4" type="button" onClick={props.closedModal}>확인</button>
        </div>

      </Box>
    </Modal>
  )
}
export default ErrorModal;
