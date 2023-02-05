import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

const Search = () => {
  const searchRef=useRef(null);
  const {query}=useParams();
  useEffect(()=>{
    console.log(query)
    searchRef.current.value=query;
  },[query]);
  return(
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-12" style={{textAlign: "left"}}>
          <h4>검색 결과</h4>
        </div>
      </div>
      <hr/>
      <div className="row mb-2" style={{flex: 1}}>
        <input type="text" style={{width: "90%", borderRadius: "100px", padding: ".5rem", border: "1px solid #EBEBEB"}} placeholder="asdasd" ref={searchRef}/>
      </div>
      <div className="row mt-4" style={{textAlign: "left"}}>
        <h6 style={{color:"#999999"}}>검색 결과가 없습니다. 다시 검색해주세요.</h6>
      </div>
    </div>
  )
}
export default Search;
