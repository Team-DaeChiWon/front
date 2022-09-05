import {} from 'react-bootstrap';
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
          
        </div>
      </div>
    </>
  )
}

export default Writing;