import Header from "./Header";
import Review from "./Review";
import ItemCard from "./ItemCard";
import { useParams } from "react-router-dom";
import { getItems } from "../data";
import '../styles/Item.css';
import { Link } from "react-router-dom";

export default function Item(){
    const {id}=useParams();
    const itemList= getItems();
    const item=itemList.find((it)=>it.id === parseInt(id));
    console.log(id);
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
            <div>
                <div>
                    <h2>상품설명</h2>
                    <p>
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
                    </p>
                </div>
                <div>
                    <h2>상품문의</h2>
                    <button>문의하기</button>
                </div>
                <div>
                    <h2>배송 / 교환 / 환불 안내</h2>
                    <h4>배송정보</h4>
                    <p>롯데택배 / 무료배송</p>
                    <h4>교환 / 반품</h4>
                    <p>비용 : 6000원</p>
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
            <Review></Review>
        </>
    )
}
