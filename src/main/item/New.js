import React from 'react';
import * as Ne from './NewStyle.js';
import {useState} from 'react';

function New() {
  const name=[2022, 2021, 2023];
  const title = name.map((num) => <Ne.Nb>{num}</Ne.Nb>);

  return(
    <>
    <Ne.NewBox>
      <Ne.H2>최근 게시물</Ne.H2>
      {title}
    </Ne.NewBox>
    </>
  )
}

export default New;