import "../../style/main.css";
import User from "../../image/user.svg";
import Notice from "./Notice";
import New from './New.js'
import axios from "axios";
import { useState, useEffect } from "react";


function Member() {

  let [name, setName]=useState({})

  useEffect(() => {
    axios.get(`http://10.80.162.216:8081/auth/1`)
    .then((res) => {
      console.log(res)
      setName({...res})
    }).catch((err) => {
      console.log(err)
    })
  })


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