const ResetPassword = () => {
  return(
    <div className="row">
      <div className="col-sm-12" style={{textAlign: "left"}}>
        <h4>비밀번호 재설정</h4>
        <hr/>
      </div>
      <div className="col-sm-6" style={{textAlign: "left"}}>
        <form>
          <div className="form-group mt-3">
            <label>새로운 비밀번호를 입력해주세요.</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="비밀번호"/>
            <small id="emailHelp" className="form-text text-muted">대문자, 소문자, 특수문자, 숫자 즁 2종류를 포함하여 8~16자로 입력해 주세요.</small>
          </div>
          <div className="form-group mt-3">
            <label>새로운 비밀번호를 다시 한번 더 입력해주세요.</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="비밀번호 재입력"/>
          </div>
          <button type="submit" className="btn btn-primary mt-2">비밀번호 저장</button>
        </form>
      </div>
    </div>
  )
}
export default ResetPassword;
