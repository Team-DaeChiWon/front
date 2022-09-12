import React from 'react';
import * as Ne from './NewStyle.js';
import * as N from './NoStyle.js';
import { useNavigate } from "react-router-dom";

function New() {
  const name=[2022, 2021, 2023];
  const title = name.map((num) => <Ne.Nb>{num}</Ne.Nb>);

  let navigate=useNavigate()

  return(
    <>
    <Ne.NewBox>
      <Ne.H2>최근 게시물
      <Ne.plus onClick={()=>{
            navigate('/')
          }}>더보기</Ne.plus>
      </Ne.H2>
      <Ne.nameBox>
        {title}
      </Ne.nameBox>
    </Ne.NewBox>
    </>
  )
}

export default New;