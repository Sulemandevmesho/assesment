import { useState } from "react";
import Questions from "./Questions";
import Data from "../data/data";
import QuestionierModal from "../components/modal/QuestionierModal";
import clock from "../svg/clock.svg";
import heart from "../svg/heart.svg"
import health from "../svg/health.svg"
import questionBanner from "../svg/questionBanner.svg";
import './Questionier.css';

const Questionier = () => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return(
    <div className="row " style={{background:`url(${questionBanner})`,backgroundRepeat: "no-repeat",backgroundSize: "auto 30%"}}>
      <div className="row mb-5 m990" >
        <div className="col-sm-12 mb-3 mt-5 text-center ">
          <h3 style={{color: "white"}}><b>DNA 질문검사</b></h3>
        </div>
        <div className="row offset-1 col-10">
          <div className="card-group">
            <div className="card  m-2">
              <img className="card-img-top"  src={clock} alt="Card image cap"/>
              <div className="card-body">
                <p className="card-text">각 유형별 검사의 질문 응답은 8분 이내가 좋습니다.</p>
              </div>
            </div>
            <div className="card m-2">
              <img className="card-img-top" src={heart} alt="Card image cap"/>
              <div className="card-body">
                <p className="card-text">혹 질문이 마음에 들지 않더라도 정직하게 답변하십시오.</p>
              </div>
            </div>
            <div className="card m-2">
              <img className="card-img-top" src={health} alt="Card image cap"/>
              <div className="card-body">
                <p className="card-text">각 유형별 검사의 질문 응답은 8분 이내가 좋습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5"></div>
      <Questions  data = {Data}/>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div className="m-1 p-2"><button className="btn btn-outline-primary">이전</button></div>
        <div className="m-1 p-2"><button className="btn btn-outline-primary" onClick={openModal}>다음</button></div>
      </div>
      {modal && <QuestionierModal open={open} opened = {handleOpen} closed = {handleClose} closedModal = {closeModal}/>}
    </div>
  )
}
export default Questionier;
