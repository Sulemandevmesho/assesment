import "./Mianpage.css";
import rightside from "../svg/right-side.svg";
import Footer from "../components/footer/footer";
import Header from "../components/header/Header";
const Middle = () => {
  return (
    <div className="row">
      <Header />
      <div className="row results" style={{ marginTop: "50px" }}>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <h5>2670건</h5>
          <p>누적 질문검사</p>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <h5>739명</h5>
          <p>회원가입 수</p>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <h5>325번</h5>
          <p>친구 신청건</p>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <h5>92%</h5>
          <p>A~D유형까지 모두응답</p>
        </div>
      </div>
      <div className="row ability">
        <div className="col-sm-4 offset-1 ability-left">
          
          <div style={{textAlign:"left", color: "#005BE2" }}>타입 리포트</div>

          <h4 style={{textAlign:"left"}}>나의 유전자 능력을 파헤치다.</h4>

          <p style={{textAlign:"left"}}>회원가입 후에 무료로 학습 유전자 타입 질문검사를 추진하면 부모로부터 물려받아 조합된 유전자 타입을 파악하여 나를 더 일찍 알고 대처하는 것에 의미가 있습니다.</p>

          <div style={{ textAlign: "left" }}>
            <button className="btn btn-primary m-1">타입유형</button>
            <button className="btn btn-outline-primary m-1">이론탐구</button>
          </div>
        </div>
        <div className="col-sm-6">
          <img src={rightside} style={{marginLeft:"15%"}} alt="rightside" />
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Middle;
