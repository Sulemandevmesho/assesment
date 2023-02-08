import { Modal, Box } from "@mui/material";
import result from "../../svg/result.svg"
import loading from "../../svg/loading.svg"
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
const QuestionierModal = (props) => {
  const navigate=useNavigate();
  return(
    <Modal open={Boolean(props.opened)} onClose={props.closed}>
      <Box container="div" sx={style}>
        <div style={{textAlign:"right"}}>
          <p style={{cursor: "pointer"}} onClick={()=>{
            props.closedModal();
            navigate('/results');
            }}>X</p>
        </div>
        <div className="text-center">
          <h3>ㅇㅇㅇ님의 검사 결과를 분석중입니다.</h3>
        </div>
        <div className="text-center">
          <p>ㅇㅇㅇ님의 검사를 토대로 결과를 분석중입니다.결과 분석이 완료 되면 창이 자동으로 꺼집니다.잠시만 기다려주세요.</p>
        </div>
        <div className="row mb-5 mt-5"  style={{display:"flex",justifyContent:"center"}}>
          <img  className="mx-auto " src={result} style={{width:"auto",height:200,position:"relative"}} alt="Card image cap"/>
          <img  src={loading} className="mx-auto mt-5" style={{width:"auto",height:150,position:"absolute"}} alt="Card image cap"/>
        </div>
      </Box>
    </Modal>
  )
}
export default QuestionierModal;
