import Header from "./Header";
import '../styles/Login.css';
import Logo from '../images/site-logo.png';
import { Link } from "react-router-dom";

export default function Login(){
  return (
    <div id="login_wrapper">
      <Header></Header>
      <div id="login_container">
        <img src={Logo} alt="logo" width="100px" id="login-logo" />
        <h2>로그인</h2>
        <form action="/login_process" method="post">
          <p>
            <input type="text" name="id" id="user_id" placeholder="아이디" />
          </p>
          <p>
            <input type="password" name="password" id="user_pwd" placeholder="비밀번호" />
          </p>
          <p><input type="submit" value="로그인" id="login_btn" /></p>
          <p><Link to="register">회원이 아니신가요?</Link></p>
        </form>
      </div>
    </div>
  );
}