import { Routes, Route } from "react-router-dom";
import Login from './component/Login';
import List from './component/List';
import UserInfo from './component/UserInfo';
import Register from './component/Register';
import Welcome from './component/Welcome';
import Create from './crud/Create';
import Item from './component/Item';
import Home from "./component/Home";
import './App.css';
import { useEffect } from "react";

export default function App(){

  useEffect(()=>{
    fetch("http://localhost:8080/api")
    .then(res=>res.json())
    .then(data=>console.log(data))
  })


    return (
        <>
          <div>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/login" element={<Login />}/>
              <Route path='/user_info' element={<UserInfo />} />
              <Route path="/shopping_list" element={<List />}/>
              <Route path="/item/:id" element={<Item />}/>
              <Route path="/register" element={<Register />}/>
              <Route path="/welcome" element={<Welcome />}/>
              <Route path="/create" element={<Create />}/>
            </Routes>
          </div>
        </>
      );
}