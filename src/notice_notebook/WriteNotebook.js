import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from "react-bootstrap";
import axios from "axios";

import ServerConfig from './../config/server.json';

import './Notebook.css';

function WriteNotebook(){

    let [content, setContent] = useState();

    let navigate = useNavigate();

    return(
        <>
            <div className="wrbg">

            <div className="writer">
                <h3 className="wrh3">알림장 작성</h3>
            </div>
            
            <div className="Box">
                <div className="input_area">
                    <textarea className='input_content' placeholder='내용' onChange={(e)=>{setContent(e.target.value)}}/>

                    <div className='wrBtn'>

                        <button className="submitbtn" onClick={() => {
                            axios.post(`${ServerConfig.address}/notification/{community-id}`, { content: content })
                            .then((result) => {navigate('/')});
                        }}>등록</button>

                    </div>
                </div>
            </div>
        
            </div>

        </>
    )
}

export default WriteNotebook;