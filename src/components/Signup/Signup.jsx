import { useState } from "react";
import ErrorModal from "../modal/ErrorModal";
const Signup = () => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return(
    <div className="col-sm-12 text-center">
      <h4 className="mt-5">logo logo</h4>
      <div style={{display:"flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
      <form onSubmit={handleSubmit} style={{textAlign: "left", width: "50%"}}>
        <div className="form-group">
          <label>닉네임<span style={{color: "red"}}>*</span></label>
          <input type="text" className="form-control" placeholder="닉네임"/>
          <small className="form-text text-muted">웹사이트 내에서 사용할 닉네임을 입력하세요. (영문 대문자, 소문자, 숫자만 가능)</small>
        </div>
        <div className="form-group">
          <label>이메일 주소<span style={{color: "red"}}>*</span></label>
          <div style={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
            <input style={{flex: 1}} type="email" className="form-control" placeholder="이메일 주소"/>
            <button className="btn btn-primary p-2">인증번호 받기</button>
          </div>
        </div>
        <div className="form-group">
          <input type="number" className="form-control" placeholder="이메일로 수신된 인증번호를 입력해 주세요."/>
          <small className="form-text text-muted">형식에 맞는 이메일 주소를 입력한 후 오타가 없는지 재확인해 주세요.</small>
        </div>
        <div className="form-group">
          <label>비밀번호<span style={{color: "red"}}>*</span></label>
          <input type="password" className="form-control" placeholder="비밀번호"/>
          <small className="form-text text-muted">대문자, 소문자, 특수문자, 숫자 즁 2종류를 포함하여 8~16자로 입력해 주세요.</small>
        </div>
        <div className="form-group">
          <label>비밀번호 재확인<span style={{color: "red"}}>*</span></label>
          <input type="password" className="form-control" placeholder="비밀번호 확인"/>
          <small className="form-text text-muted">위에 입력하신 비밀번호를 한번 더 입력해 주세요.</small>
        </div>
        <div className="form-group">
          <label>휴대폰 인증<span style={{color: "red"}}>*</span></label>
          <button className="form-control btn btn-primary">인증하기</button>
        </div>
        <div className="text-center mt-2">
          <button type="submit" className="btn btn-outline-primary m-1">이전</button>
          <button type="submit" className="btn btn-primary m-1" onClick={openModal}>가입하기</button>
        </div>
      </form>
      </div>
      {modal && <ErrorModal open={open} opened = {handleOpen} closed = {handleClose} closedModal = {closeModal}/>}
    </div>
  )
}
export default Signup;
