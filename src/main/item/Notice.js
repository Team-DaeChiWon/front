import React from 'react';
import * as N from './NoStyle.js';

function Notice() {

  const top=[2022, 2021, 2023];
  const result = top.map((num) => <N.ImBox>{num}</N.ImBox>);
  console.log(result);

  return(
    <>
    <N.NoBox>
      <N.Top>
        <N.Import>공지</N.Import>
        <N.ImportBox>
          {result}
        </N.ImportBox>
      </N.Top>

      <N.Bottom>
        <N.Import>알림장</N.Import>
        <N.ImportBox>
          {result}
        </N.ImportBox>
      </N.Bottom>
    </N.NoBox>
    </>
  )
  
}

export default Notice;