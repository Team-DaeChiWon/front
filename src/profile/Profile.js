import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import * as P from './Profile.style.js';

function Profile(){

    let [nowPassword, setNowPassword] = useState();
    let [newPassword, setNewPassword] = useState();
    let [checkPassword, setCheckPassword] = useState();

    return(

        <P.BigBox>

            <P.Main>
                <P.Img></P.Img>
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
                        <P.H5>현재 비밀번호</P.H5>
                        <P.Input placeholder="현재 비밀번호"></P.Input>
                        <P.H5>새 비밀번호</P.H5>
                        <P.Input placeholder="새 비밀번호"></P.Input>
                        <P.H5>비밀번호 확인</P.H5>
                        <P.Input placeholder="비밀번호 확인"></P.Input>
                    </P.Change_Password_Part>
                </Tab>

                <Tab eventKey="contact" title="글로그">
                우
                </Tab>

            </Tabs>

        </P.BigBox>
    )
}

export default Profile;