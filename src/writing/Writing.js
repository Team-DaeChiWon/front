import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from "react-bootstrap";
import "../style/writing.css";
import axios from "axios";

function Writing() {
  let navigate = useNavigate();

  const [selected, setSelected] = useState("");
  let [title, setTitle] = useState();
  let [item, setItem] = useState();

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <>
      <div className="wrbg">
        <div className="writer">
          <h3 className="wrh3">글쓰기</h3>
        </div>
        <div className="writingBox">
          <div className="writingText">
            <ButtonGroup className="mb-2">
              <Button
                onClick={() => setSelected("글머리")}
                className={selected === "글머리" && "selected"}
              >
                글머리
              </Button>
              <Button
                onClick={() => setSelected("정보")}
                className={selected === "정보" && "selected"}
              >
                정보
              </Button>
              <Button
                onClick={() => setSelected("교육")}
                className={selected === "교육" && "selected"}
              >
                교육
              </Button>
              <Button
                onClick={() => setSelected("안내")}
                className={selected === "안내" && "selected"}
              >
                안내
              </Button>
            </ButtonGroup>
              <input className='wrinput writinginput' type='text' placeholder='제목'
              onChange={(e)=>{
                setTitle(e.target.value)}}/>
              <textarea className='wrtextarea writinginput' placeholder='내용'
              onChange={(e)=>{
                setTitle(e.target.value)}}/>
              <div className='wrBtn'>
              <button className='sbtn'
              onClick={()=>{
                axios.delete('http://10.80.162.216:8081/community/{id}',{asdf:selected, adfa:title, zsdf:item})
                .then(()=>{navigate('/')})
            }}>삭제</button>

              <button
                className="sbtn"
                onClick={() => {
                  axios.post("http://10.80.162.216:8081/community/{id}", { asdf: selected, adfa: title, zsdf: item })
                    .then(() => {navigate('/')});
                }}
              >
                등록
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Writing;
