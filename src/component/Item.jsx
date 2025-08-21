import Header from "./Header";
import Review from "./Review";
import ItemCard from "./ItemCard";
import { useParams } from "react-router-dom";
import { getItems } from "../data";
import '../styles/Item.css';
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Item(){
    const [mode,setMode]=useState('explain');
    const {id}=useParams();
    const itemList= getItems();
    const item=itemList.find((it)=>it.id === parseInt(id));
    let content=null;
    if(mode === 'explain'){
        content=<p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Nemo vitae ipsum autem quas itaque nihil, tempora optio 
                        eius illum maiores doloremque assumenda consequuntur 
                        amet maxime nobis consectetur mollitia quaerat natus 
                        ut laboriosam temporibus! Praesentium sed vero, 
                        necessitatibus sequi voluptas porro reiciendis quidem 
                        soluta repellat tempora veniam quia perspiciatis sapiente unde? 
                        Minima, dolore iure eveniet cupiditate ullam officiis voluptatibus 
                        molestias beatae cumque esse voluptatum magnam ratione corrupti 
                        similique neque voluptatem aliquid non incidunt totam. Laboriosam, 
                        obcaecati saepe. Reprehenderit quasi rem quas itaque praesentium 
                        cumque illum blanditiis officia. Est repellendus, aspernatur corporis 
                        impedit voluptatum corrupti, earum ex omnis facilis doloremque similique sed.
        </p>;
    } else if(mode === 'inquire'){
        content=
        <div>
            <input type="text" />
            <button>문의하기</button>
        </div>;
    } else if(mode === 'review'){
        content=<Review></Review>;
    }
    return (
        <>
            <div id="item">
                <Header></Header>
                <img src="https://picsum.photos/150/150" alt="" />
                <h4>{item.title}</h4>
                <p>{item.price}</p>
                <div>
                    <input type="button" value="구매하기" />
                    <input type="button" value="장바구니" />
                </div>
            </div>
            <div className="nav">
                <button onClick={()=>{
                    setMode('explain');
                }}>상품설명</button>
                <button onClick={()=>{
                    setMode('inquire');
                }}>상품문의</button>
                <button onClick={()=>{
                    setMode('review');
                }}>리뷰</button>
            </div>
            <div>
                {content}
                <div>
                    <h2>배송 / 환불 / 교환 안내</h2>
                    <table border={1}>
                        <tr>
                            <th>배송</th>
                            <td>민국택배, 영업일 기준 2~3일</td>
                        </tr>
                        <tr>
                            <th>환불</th>
                            <td>수수료 10000원</td>
                        </tr>
                        <tr>
                            <th>교환</th>
                            <td>수수료 5000원</td>
                        </tr>
                    </table>
                </div>
                <div>
                    <h2>다른 상품들</h2>
                    <div className="other-items">
                        {itemList.map((item)=>(
                                <div key={item.id} className='item'>
                                    <Link to={`/item/${item.id}`}>
                                        <ItemCard item={item} />
                                    </Link>
                                </div>
                        ))}
                    </div>  
                </div>
            </div>
            
        </>
    )
}
