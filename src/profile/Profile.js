import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import profile from '../image/profile.png';

import * as P from './Profile.style.js';

function Profile(){

    let [nowPassword, setNowPassword] = useState();
    let [newPassword, setNewPassword] = useState();
    let [checkPassword, setCheckPassword] = useState();

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
                className="mb-3"
                >

                <Tab eventKey="home" title="정보">
                아
                </Tab>

                <Tab eventKey="profile" title="보안">
                    <P.Change_Password_Part>
                        <P.fontSize>현재 비밀번호</P.fontSize>
                        <P.Input placeholder="현재 비밀번호" onChange={(e)=>{nowPassword(e.target.value)}}></P.Input>

                        <P.fontSize>새 비밀번호</P.fontSize>
                        <P.Input placeholder="새 비밀번호" onChange={(e)=>{newPassword(e.target.value)}}></P.Input>

                        <P.fontSize>비밀번호 확인</P.fontSize>
                        <P.Input placeholder="비밀번호 확인" onChange={(e)=>{checkPassword(e.target.value)}}></P.Input>
                    </P.Change_Password_Part>
                </Tab>

                <Tab eventKey="contact" title="글로그">
                우
                </Tab>

            </Tabs>

        </P.BigBox>
        </div>
    )
}

export default Profile;