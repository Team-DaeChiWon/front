import "../../style/main.css";
import User from "../../image/user.svg";
import Notice from "./Notice";
import { useEffect } from 'react';
import axios from "axios";
import { useState } from "react";

function Member() {
  const a = async() => {
    await axios.get('/').then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(()=>{
    let a=setName(()=>{})
    return()=>{
      
    }
  },[])

  let[name, setName]=useState()
  let[pick, setPick]=useState()



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
            <h6 style={{fontWeight:'700'}}>{name}닉네임</h6>
            <p style={{color:'#828282'}}>분류</p>
          </div>
        </div>

        <div className="mb-menu user">
        </div>

      </div>
    </div>
    </>
  )
}

export default Member;