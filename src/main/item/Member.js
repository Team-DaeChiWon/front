import "../../style/main.css";
import User from "../../image/user.svg";
import Notice from "./Notice";
import New from './New.js'
import axios from "axios";
import { useEffect } from 'react';
import { useState } from "react";


function Member() {

  let [name, setName]=useState({})

  const data = async() => {
    await axios.get('10.80.162.50:8081/auth/')
    .then((res) => {
      console.log(res)
      setName({...res})
    }).catch((err) => {
      console.log(err)
    })
  }

  return(
    <>
    <div className="proBox">
      <div className="menu">
        <New/>
        <Notice/>
      </div>

      <div className="mbBox"> 
        <div className="mbimg user">
          <img className="userimg" src={User}/>
          <div className="userbox">
            <h6 style={{fontWeight:'700'}}>{name.nickname}</h6>
            <p style={{color:'#828282'}}>{name.type}</p>
          </div>
        </div>

        <div className="mb-menu user"></div>

      </div>
    </div>
    </>
  )
}

export default Member;