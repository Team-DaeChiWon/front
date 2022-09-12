import React from 'react';
import * as Ne from './NewStyle.js';
import {useState} from 'react';

function New() {
  let d={name:'1'}

  return(
    <>
    <Ne.NewBox>
      <Ne.H2>최근 게시물</Ne.H2>
      <Ne.Nb>{d.name}</Ne.Nb>
    </Ne.NewBox>
    </>
  )
}

export default New;