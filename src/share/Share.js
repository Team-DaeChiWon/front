import Header from "../Header";
import '../style/share.css'

function Share(){


  return(
    <>
      <Header/>
      <div id='share'>
        <div id='func'>
          <h3>자료 공유</h3>
        </div>
        <div id='shareBox'>
            <div id='shareTitle'>
                <div id='title'>자료 공유합니다~</div>
                <div id='left'>
                    <div id='wirter'>성이름</div>
                    <div id='date'>22.08.23</div>
                </div>
                <div id='right'>   
                    <div id='views'>조회수 : 23</div>
                    <div id='recom'>추천 : 2</div>
                </div>
            </div>
            <div id='shareContents'>

            </div>
        </div>
      </div>
    </>
  )
}

export default Share;