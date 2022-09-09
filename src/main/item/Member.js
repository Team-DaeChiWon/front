import "../../style/main.css";
import User from "../../image/user.svg";
import Notice from "./Notice";
import axios from "axios";
import { useEffect } from 'react';
import { useState } from "react";


function Member() {

  const [mdata, setMdata]=useState()

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => {
      setMdata(res.data)
    }).catch(()=>{
      console.log("실패")
    })
  })

  return(
    <>
    <div className="proBox">
      <div className="menu">
        <Notice/>
      </div>

      <div className="mbBox"> 
        <div className="mbimg user">
          <img className="userimg" src={User}/>
          <div className="userbox">
            <h6 style={{fontWeight:'700'}}>닉네임</h6>
            <p style={{color:'#828282'}}>분류</p>
          </div>
        </div>

        <div className="mb-menu user"></div>

      </div>
    </div>
    </>
  )
}

export default Member;