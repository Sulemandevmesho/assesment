const Middle = () => {
  return (
    <div className="row">
      <div className="row">
        <div className="col-sm-3">
          <h5>2670건</h5>
          <p>누적 질문검사</p>
        </div>
        <div className="col-sm-3">
          <h5>739명</h5>
          <p>회원가입 수</p>
        </div>
        <div className="col-sm-3">
          <h5>325번</h5>
          <p>친구 신청건</p>
        </div>
        <div className="col-sm-3">
          <h5>92%</h5>
          <p>A~D유형까지 모두응답</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div style={{color: "#005BE2", textAlign: "left"}}>타입 리포트</div>
          <div style={{textAlign: "left"}}><h4>나의 유전자 능력을 파헤치다.</h4></div>
          <div style={{textAlign: "left"}}><p>회원가입 후에 무료로 학습 유전자 타입 질문검사를 추진하면 부모로부터 물려받아 조합된 유전자 타입을 파악하여 나를 더 일찍 알고 대처하는 것에 의미가 있습니다.</p></div>
          <div style={{textAlign: "left"}}>
            <button className="btn btn-primary m-1">타입유형</button>
            <button className="btn btn-outline-primary m-1">이론탐구</button>
          </div>
        </div>
        <div className="col-sm-6" style={{backgroundColor: "grey"}}>

        </div>
      </div>
    </div>
  )
}
export default Middle;
