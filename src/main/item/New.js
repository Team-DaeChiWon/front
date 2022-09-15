import React from 'react';
import * as Ne from './NewStyle.js';
import * as N from './NoStyle.js';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

function New() {

  // let[newnote, setNewnote]=useState({})

  // const data = async() => {
  //   await axios.get('http://10.80.162.216:8081/auth/')
  //   .then((res) => {
  //     console.log(res)
  //     setNewnote({...res})
  //   })
  // }

  const newnote=[22,23,25]

  const title = newnote.map((num) => <Ne.Nb>{num}</Ne.Nb>);

  let navigate=useNavigate()

  return(
    <>
    <Ne.NewBox>
      <Ne.H2>최근 게시물
      </Ne.H2>
      <Ne.nameBox>
        {title}
      </Ne.nameBox>
    </Ne.NewBox>
    </>
  )
}

export default New;