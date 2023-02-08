import { useNavigate } from "react-router";
import o4A from "../svg/o4A.svg";
import "./Results.css";
const Results = () => {
  const navigate = useNavigate();
  return (
    <div className="row ">
      <div
        className="card mb-3 offset-1 border-none col-10"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <img src={o4A} id="o4A" alt="Card image cap" />
        <div className="card-body col-12">
          <h5 className="card-title fw-bolder text-center">04 아에삼엘</h5>
          <h5 className=" fw-bolder fs-4 text-center">(II-A-43-SL)</h5>
          <p className="card-text" style={{ color: "#575757" }}>
            지구력이 강하고 차분하며 침착한 성격이어서 학습에 유리합니다.
          </p>
          <p className="card-text fw-bold mt-5">정확도 50%~55%</p>
          <div className="card-text mx-auto   col-6">
            <div className="slidecontainer ">
              <input
                type="range"
                min="1"
                max="100"
                style={{ position: "relative", width: "100%" }}
                defaultValue="50"
                className="slider"
                id="myRange"
              />
            </div>
          </div>
          <p
            className="card-text mt-5 "
            style={{ display: "flex", paddingLeft: "10%", color: "red" }}
          >
            *더 많은 질문을 풀 시 정확도가 올라갑니다.
          </p>
        </div>
      </div>
      <div
        className=" bg-transparent mt-2 border-none"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button className="btn btn-outline-primary col-2 m-1" onClick={()=>navigate('/')}>종료</button>
        <button className="btn btn-primary col-2 m-1">계속</button>
      </div>
    </div>
  );
};
export default Results;
