const Footer = () => {
  return (
    <div className="row" style={{backgroundColor: "linear-gradient(180deg, rgba(0, 91, 226, 0.04) 0%, rgba(0, 91, 226, 0) 100%)"}}>
      <h4 className="mt-5">사용후기</h4>
      <p>학습유전자 검사는 너무 무서웠어요 나를 더 이해하게 만들었고 나의 신체도 행동도 감정도 이해하도록 풀어줬습니다. 정말정말 고마워요.</p>
      <div className="row mt-3">
        <div className="col-sm-3" style={{borderTop: "1 line #005BE2"}}>
          <div className="row">
            <div className="col-sm-4" style={{textAlign: "left", display: "flex", alignItems: "center"}}>
              <img style={{height: 50, width: 50, borderRadius: 50, backgroundColor: 'grey'}}/>
            </div>
            <div className="col-sm-8">
              <div style={{textAlign: "left"}}>
                <p><b>ccoon</b></p>
                <p style={{color: "#005BE2"}}><b>38아시사엘(II-C-44-SL)</b></p>
              </div>
            </div>
          </div>
          <div className="row" style={{textAlign: "left"}}>
            <p>유전자로 알아본 내성향 타입 리포트를 보고 그동안 살아온 과정들이 필름처럼 스쳐갑니다. 너무 놀랍고 왜 내가 이렇한 행동을 했는지 이제 깨닫습니다. 앞으로의 삶에서 보완적으로 참고합니다.</p>
          </div>
        </div>
        <div className="col-sm-3" style={{borderTop: "1 line #005BE2"}}>
          <div className="row">
            <div className="col-sm-4" style={{textAlign: "left", display: "flex", alignItems: "center"}}>
              <img style={{height: 50, width: 50, borderRadius: 50, backgroundColor: 'grey'}}/>
            </div>
            <div className="col-sm-8">
              <div style={{textAlign: "left"}}>
                <p><b>jini82</b></p>
                <p style={{color: "#005BE2"}}><b>22아비삼엘 (II-B-43-SL)</b></p>
              </div>
            </div>
          </div>
          <div className="row" style={{textAlign: "left"}}>
            <p>와우~ 저는 항상 제 자신을 성찰하고 자각하는 사람이라고 생각 했는데... 학습유전자 타입을 보니 더 나를 이해하고 개인적인 성장에 도움이 되었다고 생각했습니다. 감사합니다.</p>
          </div>
        </div>
        <div className="col-sm-3" style={{borderTop: "1 line #005BE2"}}>
          <div className="row">
            <div className="col-sm-4" style={{textAlign: "left", display: "flex", alignItems: "center"}}>
              <img style={{height: 50, width: 50, borderRadius: 50, backgroundColor: 'grey'}}/>
            </div>
            <div className="col-sm-8">
              <div style={{textAlign: "left"}}>
                <p><b>Irene</b></p>
                <p style={{color: "#005BE2"}}><b>7알에사스 (ID-A-44-SS)</b></p>
              </div>
            </div>
          </div>
          <div className="now" style={{textAlign: "left"}}>
            <p>이 검사는 놀랍도록 정확합니다. 나는 모든 사람들이 학습유전자 타입을 알아서 인생에서 훨씬 더 많은 것을 성취하는 방법을 배울 것을 추천합니다. 다른사람들이 자신의 성향을 알수있도록 도와주셔 ...</p>
          </div>
        </div>
        <div className="col-sm-3" style={{borderTop: "1 line #005BE2"}}>
          <div className="row">
            <div className="col-sm-4" style={{textAlign: "left", display: "flex", alignItems: "center"}}>
              <img style={{height: 50, width: 50, borderRadius: 50, backgroundColor: 'grey'}}/>
            </div>
            <div className="col-sm-8">
              <div style={{textAlign: "left"}}>
                <p><b>weather</b></p>
                <p style={{color: "#005BE2"}}><b>45알시삼스 (ID-C-43-SS)</b></p>
              </div>
            </div>
          </div>
          <div className="row" style={{textAlign: "left"}}>
            <p>이 웹사이트를 너무너무 좋아합니다. 나의 타입 리포트는 놀랍도록 통찰력이 있었습니다. 나를 이해하는데 정말 많은 도움이 되었습니다. 그리고 나의 타입에 장애물을 극복하기 위해 계획을 세우는데 ...</p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <p><i className="fa fa-arrow-circle-left m-1"></i><i className="fa fa-arrow-circle-right m-1"></i></p>
      </div>
      <div className="row mt-5">
        <div className="col-sm-12"><h5>학습유전자 타입은 총 54개의 타입이 있습니다.</h5></div>
        <div className="col-sm-12"><h5>회원가입후 무료로 회원님의 학습유전자 타입을 발견해 보세요!</h5></div>
      </div>
      <div className="row" style={{textAlign: "center"}}>
        <button className="btn btn-primary mt-10">바로가기</button>
      </div>
    </div>
  )
}
export default Footer;
