import React from 'react';
import * as N from './NoStyle.js';
import { useState } from 'react';

function Notice() {

  let d={date:2022}

  return(
    <>
    <N.NoBox>
      <N.Top>
        <N.Import>공지</N.Import>
        <N.ImportBox>
          <N.ImBox>{d.date}</N.ImBox>
        </N.ImportBox>
      </N.Top>

      <N.Bottom>
        <N.Import>알림장</N.Import>
        <N.ImportBox>
          <N.ImBox>{d.date}</N.ImBox>
        </N.ImportBox>
      </N.Bottom>
    </N.NoBox>
    </>
  )
  
}

export default Notice;