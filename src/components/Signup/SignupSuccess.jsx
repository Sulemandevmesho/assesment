import { Link } from "react-router-dom";

const SignupSuccess = () => {
  return (
    <div className="row ">
      <div className="col-6 offset-3 m990 text-center">
      <h2 className="mt-5 ">logo logo</h2>
      <h2 className="mt-5 p-5 fw-bolder fs-1">환영합니다! </h2>
      <p>
        gildonghong님의 54DNAtype에 가입한 이메일 주소는 <Link to="/">gildonghong@email.com</Link>
        입니다. 지금 바로 로그인 하여 54DNAtype의 DNA질문검사를 시작해 보세요.
      </p>
      <div style={{display:'flex',justifyContent:"center"}}>
        <Link className="m-2 btn btn-outline-primary  col-4" to="/">메인화면</Link>
        <Link className="m-2 btn btn-primary  col-4" to="/questiontest">DNA 질문검사</Link>
      </div>
    </div>
    </div>
  );
};
export default SignupSuccess;
