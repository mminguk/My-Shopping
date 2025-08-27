import { Link } from "react-router-dom"
import { useEffect } from "react";
export default function Header(){
  let islogged=window.sessionStorage.is_logined;
    return (
        <div id="container">
        <Link to='/' className="menu-btn">
          <h2>Minguk Mall</h2>
        </Link>
        {islogged===true ? <Link to='/login' className="menu-btn">로그인</Link> : <Link to='/logout' className="menu-btn">로그아웃</Link>}
        <Link to='/shopping_list' className="menu-btn">장바구니</Link>
      </div>
    );
}