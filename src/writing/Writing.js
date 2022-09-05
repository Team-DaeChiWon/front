import {Button, ButtonGroup} from 'react-bootstrap';
import Header from "../Header";
import '../style/writing.css'

function Writing(){
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
              <Button>글머리</Button>
              <Button>정보</Button>
              <Button>교육</Button>
              <Button>안내</Button>
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