import "./footer.css";
import footerBaner from '../../svg/footer-baner.svg'
const Footer = () => {
  //clip-path: polygon(10% 19%,54% 0,96% 17%,100% 83%,54% 100%,0 74%); image like svg !importent
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1500 70"
        preserveAspectRatio="none"
        fill="#fff"
        style={{ backgroundColor: "#005BE20A",margin:"0 -1.2%" }}
        
      >
        <path d="m0 20 420 40L800 0l750 60 370-45V0H0z"></path>
      </svg>

      <div
        className="row"
        style={{ backgroundColor: "rgba(0, 91, 226, 0.04)" }}
      >
        <h4 className="mt-5">사용후기</h4>
        <p>
          학습유전자 검사는 너무 무서웠어요 나를 더 이해하게 만들었고 나의
          신체도 행동도 감정도 이해하도록 풀어줬습니다. 정말정말 고마워요.
        </p>
        {/*carsul*/}
        <div className="row mt-3 slider" style={{ justifyContent: "center" }}>
          <div
            className="col-sm-3 card"
            style={{ borderTop: "1 line #005BE2" }}
          >
            <div className="row head par">
              <div
                className="col-sm-4 head-img"
                style={{
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    marginLeft:25,
                    height: 60,
                    width: 60,
                    clipPath:
                      "polygon(10% 19%,54% 0,96% 17%,100% 83%,54% 100%,0 74%)",
                    backgroundColor: "grey",
                  }}
                />
              </div>
              <div className="col-sm-6 head-info">
                <div
                  style={{
                    textAlign: "left",
                    fontSize: "1rem",
                    marginBottom: "-1em",
                    marginTop: " 0em",
                  }}
                >
                  <p>
                    <b>ccoon</b>
                  </p>
                  <p
                    style={{
                      color: "#005BE2",
                      marginBottom: "-1em",
                      marginTop: " 0em",
                      fontSize: ".8rem",
                    }}
                  >
                    <b>38아시사엘(II-C-44-SL)</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="row" style={{ textAlign: "left" }}>
              <p>
                유전자로 알아본 내성향 타입 리포트를 보고 그동안 살아온 과정들이
                필름처럼 스쳐갑니다. 너무 놀랍고 왜 내가 이렇한 행동을 했는지
                이제 깨닫습니다. 앞으로의 삶에서 보완적으로 참고합니다.
              </p>
            </div>
          </div>
          <div
            className="col-sm-3 card"
            style={{ borderTop: "1 line #005BE2" }}
          >
            <div className="row head sky">
              <div
                className="col-sm-4 head-img"
                style={{
                  
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    marginLeft:25,
                    height: 60,
                    width: 60,
                    clipPath:
                      "polygon(10% 19%,54% 0,96% 17%,100% 83%,54% 100%,0 74%)",
                    backgroundColor: "grey",
                  }}
                />
              </div>
              <div className="col-sm-6 head-info ">
                <div
                  style={{
                    textAlign: "left",
                    fontSize: "1rem",
                    marginBottom: "-1em",
                    marginTop: " 0em",
                  }}
                >
                  <p>
                    <b>ccoon</b>
                  </p>
                  <p
                    style={{
                      color: "#005BE2",
                      marginBottom: "-1em",
                      marginTop: " 0em",
                      fontSize: ".8rem",
                    }}
                  >
                    <b>38아시사엘(II-C-44-SL)</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="row" style={{ textAlign: "left" }}>
              <p>
                유전자로 알아본 내성향 타입 리포트를 보고 그동안 살아온 과정들이
                필름처럼 스쳐갑니다. 너무 놀랍고 왜 내가 이렇한 행동을 했는지
                이제 깨닫습니다. 앞으로의 삶에서 보완적으로 참고합니다.
              </p>
            </div>
          </div>

          <div
            className="col-sm-3 card"
            style={{ borderTop: "1 line #005BE2" }}
          >
            <div className="row head gre">
              <div
                className="col-sm-4 head-img"
                style={{
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    marginLeft:25,
                    height: 60,
                    width: 60,
                    clipPath:
                      "polygon(10% 19%,54% 0,96% 17%,100% 83%,54% 100%,0 74%)",
                    backgroundColor: "grey",
                  }}
                />
              </div>
              <div className="col-sm-6 head-info">
                <div
                  style={{
                    textAlign: "left",
                    fontSize: "1rem",
                    marginBottom: "-1em",
                    marginTop: " 0em",
                  }}
                >
                  <p>
                    <b>ccoon</b>
                  </p>
                  <p
                    style={{
                      color: "#005BE2",
                      marginBottom: "-1em",
                      marginTop: " 0em",
                      fontSize: ".8rem",
                    }}
                  >
                    <b>38아시사엘(II-C-44-SL)</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="row" style={{ textAlign: "left" }}>
              <p>
                유전자로 알아본 내성향 타입 리포트를 보고 그동안 살아온 과정들이
                필름처럼 스쳐갑니다. 너무 놀랍고 왜 내가 이렇한 행동을 했는지
                이제 깨닫습니다. 앞으로의 삶에서 보완적으로 참고합니다.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div style={{display:"flex",flexDirection:'row',justifyContent:"center",padding:"10px"}}>
            <i className="arrow" style={{display:"flex",width:"40px",height:"40px",color:"#000",background:"#fff",boxShadow:"1px 1px rgba(0,0,0,0.5)",borderRadius:"100%",alignContent:'center',justifyContent:"center",alignItems:"center"}}>{"<"}</i>
            <i className="arrow" style={{display:"flex",width:"40px",height:"40px",marginLeft:"10px",color:"#000",background:"#fff",boxShadow:"1px 1px rgba(0,0,0,0.5)",borderRadius:"100%",alignContent:'center',justifyContent:"center",alignItems:"center"}} >{">"}</i>
            </div>
        </div>
        <div className="row" style={{ paddingTop:"15%"}}>
          <div className="col-sm-12">
            <h5>학습유전자 타입은 총 54개의 타입이 있습니다.</h5>
          </div>
          <div className="col-sm-12">
            <h5>회원가입후 무료로 회원님의 학습유전자 타입을 발견해 보세요!</h5>
          </div>
        </div>
        <div className="row" style={{ textAlign: "center" ,margin:"5% 0"  }}>
          <button className="btn btn-primary mt-10 col-2"  style={{ margin:"auto" }}>바로가기</button>
        </div>
      </div>
      <img src={footerBaner} style={{marginTop:"20%"}} alt="footer"/>
    </>
  );
};
export default Footer;
