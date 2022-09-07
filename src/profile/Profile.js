import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import profile from '../image/profile.png';

import * as P from './Profile.style.js';
import './Profile.css';

function Profile(){

    let [nowPassword, setNowPassword] = useState();
    let [newPassword, setNewPassword] = useState();
    let [checkPassword, setCheckPassword] = useState();
    let [name, setName] = useState();

    let navigate = useNavigate();

    return(
        <div className="backgroundColor">
        <P.BigBox>

            <P.Main>
                <P.Img src={profile}></P.Img>
                <P.Name>이름</P.Name>
            </P.Main>

            <Tabs 
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-3; TabsFlex"
                >

                <Tab eventKey="home" title="정보">
                    <P.Box>
                    </P.Box>
                </Tab>

                <Tab eventKey="profile" title="보안">
                    <P.Box>
                        <P.fontSize>현재 비밀번호</P.fontSize>
                        <P.Input placeholder="현재 비밀번호" onChange={(e)=>{setNowPassword(e.target.value)}}></P.Input>

                        <P.fontSize>새 비밀번호</P.fontSize>
                        <P.Input placeholder="새 비밀번호" onChange={(e)=>{setNewPassword(e.target.value)}}></P.Input>

                        <P.fontSize>비밀번호 확인</P.fontSize>
                        <P.Input placeholder="비밀번호 확인" onChange={(e)=>{setCheckPassword(e.target.value)}}></P.Input>

                        {
                            newPassword != "" && checkPassword != "" ? 
                            newPassword === checkPassword ? <P.Same>비밀번호가 일치합니다</P.Same> : <P.Different>*비밀번호가 일치하지 않습니다*</P.Different>
                            : null
                        }

                        <P.Button onClick={()=>{
                            axios.post('',{asdf:nowPassword, asdf:newPassword})
                            .then((result)=>{navigate('')})
                        }}>변경하기</P.Button>
                    </P.Box>
                </Tab>

                <Tab eventKey="contact" title="글로그">
                    <P.Box>
                    </P.Box>
                </Tab>

            </Tabs>

        </P.BigBox>
        </div>
    )
}

export default Profile;