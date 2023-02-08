const style = {
  color: "#B4B4B4",
  border:"1px solid #B4B4B4",
  "&:hover":{
    backgroundColor: "#1C319F",
    border: "none",
    color: "white"
  }
}
const Questions = (props) => {
  return(
    <div className="container">
      <ol style={{type: "1", textAlign: "left"}}>
        {props.data.map((question, index) => {
          return(<li key={index} style={{borderBottom:"1px solid black"}}>
            <div style={{display:"flex", justifyContent: "space-between", alignContent:"center"}}>
              <div style={{flex: "1"}}>{question}</div>
              <div>
                <button className="btn m-1" style={style}>그렇다</button>
                <button className="btn m-1" style={style}>아니다</button>
              </div>
            </div>
          </li>)
        })}
      </ol>
    </div>
  )
}
export default Questions;
