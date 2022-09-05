import { useEffect, useState } from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';
import Header from "../Header";
import '../style/writing.css'

function Writing(){

  const [selected,setSelected] = useState("")

  useEffect(() => {
    console.log(selected)
  },[selected])

  return(
    <>
      <Header/>
      <div className='wrbg'>
        <div className='writer'>
          <h3 className='wrh3'>글쓰기</h3>
        </div>
        <div className='writingBox'>
            <div className='writingText'>
            <ButtonGroup className="mb-2">
              <Button onClick={() => setSelected("글머리")} className={selected === "글머리" && "selected"} >글머리</Button>
              <Button onClick={() => setSelected("정보")} className={selected === "정보" && "selected"}>정보</Button>
              <Button onClick={() => setSelected("교육")} className={selected === "교육" && "selected"}>교육</Button>
              <Button onClick={() => setSelected("안내")} className={selected === "안내" && "selected"}>안내</Button>
            </ButtonGroup>
              <input className='wrinput writinginput' type='text' placeholder='제목'/>
              <textarea className='wrtextarea writinginput' placeholder='내용'/>
              <div className='wrBtn'>
              <button className='sbtn'>삭제</button>
              <button className='sbtn'>등록</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Writing;