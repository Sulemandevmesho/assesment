import "./Header.css";
import FullBaner from "../../svg/baner-full.svg";
const Header = () => {
  return (
    <div className="row">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 60"
        preserveAspectRatio="none"
        fill="#fff"
        style={{ backgroundColor: "#005BE20A" }}
        className="angular-1920-1 hero__shape"
      >
        <path d="m0 20 420 40L800 0l750 60 370-45V0H0z"></path>
      </svg>
      <div
        className="col-md-12  introduction"
        style={{ backgroundColor: "#005BE20A" }}
      >
        <h4>
          54DNAtype의 학습유전자 타입 검사는 9개 그룹으로 나뉘어 54개의 타입
          결과로 제시 합니다.
        </h4>
        <p>
          매우 간단한 질문검사 방식으로 당신은 어떤 학습유전자 타입인지 확인해
          보세요.
        </p>
        <button className="btn btn-primary mt-5">검사시작</button>
      </div>
      <div style={{width:"100%",paddingTop:"10%",backgroundColor: "rgba(0, 91, 226, 0.04)" }}>
        <img
          src={FullBaner}
          alt="banner"
          style={{ width: "100%"}}
        />
      </div>
    </div>
  );
};
export default Header;
