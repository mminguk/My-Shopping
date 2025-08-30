import { Link } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
export default function Header(){
  const [mode,Setmode]=useState("guest");
  useEffect(()=>{
    fetch("http://localhost:8080/authcheck")
    .then(res=>res.json())
    .then(json=>{
      if(json.isLogin === "True"){
        Setmode("member");
      }
    });
  },[]);
  let content=null;
  if(mode === "guest"){
    content=<Link to="login" className="menu-btn">로그인</Link>;
  }else if(mode === "member"){
    content=<Link to="logout" className="menu-btn">로그아웃</Link>;
  }
    return (
        <div id="container">
        <Link to='/' className="menu-btn">
          <h2>Minguk Mall</h2>
        </Link>
        {content}
        <Link to='/shopping_list' className="menu-btn">장바구니</Link>
      </div>
    );
}