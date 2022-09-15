import React, { useEffect, useState } from 'react';
import * as N from './NoStyle.js';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Notice() {

  const note=[
    {id:0, name:'2022/11/04'},
    {id:1, name:'2022/05/06'},
    {id:2, name:'2022/01/12'},
  ]

  const nnote=[
    {id:0, name:'2022/04/08'},
    {id:1, name:'2022/03/24'},
    {id:2, name:'2022/01/01'},
  ]

  //let [note, setNote]=useState();

  // useEffect(() => {
  //   axios.get(`http://10.80.162.216:8081/auth/`)
  //   .then((res) => {
  //     console.log(res)
  //     setNote({...res})
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // })

  const result1 = note.map((num) => <N.ImBox>{num.name}</N.ImBox>);
  const result2 = nnote.map((num) => <N.ImBox>{num.name}</N.ImBox>);
  let navigate = useNavigate();

  return(
    <>
    <N.NoBox>
      <N.Top>
        <N.Import>공지
          <N.plus onClick={()=>{
            navigate('/')
          }}>더보기</N.plus>
        </N.Import>
        <N.ImportBox>
          {result1}
        </N.ImportBox>
      </N.Top>

      <N.Bottom>
        <N.Import>알림장
        <N.plus onClick={()=>{
            navigate('/')
          }}>더보기</N.plus>
        </N.Import>
        <N.ImportBox>
          {result2}
        </N.ImportBox>
      </N.Bottom>
    </N.NoBox>
    </>
  )
  
}

export default Notice;