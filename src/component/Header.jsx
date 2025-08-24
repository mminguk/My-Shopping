import { Link } from "react-router-dom"
import Logo from '../images/site-logo.png';
export default function Header(){
    return (
        <div id="container">
        <Link to='/' className="menu-btn">
          <h2>Minguk Mall</h2>
        </Link>
        <Link to='/login' className="menu-btn">로그인</Link>
        <Link to='/shopping_list' className="menu-btn">장바구니</Link>
      </div>
    );
}