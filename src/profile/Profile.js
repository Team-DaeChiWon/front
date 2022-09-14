import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import profile from "../image/profile.png";

import * as P from "./Profile.style.js";
import "./Profile.css";

function Profile() {

    useEffect(() => {
        loadPage()
    }, [])

    let [name, setName] = useState('이름');

    let [cafeList, setCafeList] = useState([]);

    let [nowPassword, setNowPassword] = useState();
    let [newPassword, setNewPassword] = useState();
    let [checkPassword, setCheckPassword] = useState();

    let [textList, setTextList] = useState(['']);

    let loadPage = () => {
        // axios.get('')
        // .then((result) => {setName(result.nickName), setCafeList(result.commnityList.), setTextList()})
        // .catch(() => { })
    }

    let navigate = useNavigate();

    return(
        <div className="background">

            <div className='title'>
                <h3 className='font'>프로필</h3>
            </div>

            <P.BigBox>

                <P.Main>
                    <P.Img src={profile}></P.Img>
                    <P.Name>{name}</P.Name>
                </P.Main>

                <Tabs 
                    defaultActiveKey="home"
                    transition={false}
                    id="noanim-tab-example"
                    className="mb-3; TabsFlex"
                    >

                    <Tab eventKey="home" title="정보">
                        <P.Box>
                            <div className="table_area">
                                <table className="table_title">
                                    <thead>
                                        <tr>
                                            <th>가입 중인 노치원</th>
                                        </tr>
                                    </thead>
                                </table>

                                {
                                    cafeList.map(() => {
                                        return (
                                            <div>
                                                <table className="table_content">
                                                    <tbody className='list_hover'>
                                                        <tr className="table_feed">
                                                            <P.Table_flex>
                                                                <td><P.Cafe_Img src=""></P.Cafe_Img></td>
                                                                <td className="table_item"></td>
                                                            </P.Table_flex>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </P.Box>
                    </Tab>

                    <Tab eventKey="profile" title="보안">
                        <P.Box>
                            <P.fontSize>비밀번호 변경</P.fontSize>
                            <P.Input placeholder="현재 비밀번호" onChange={(e)=>{setNowPassword(e.target.value)}}></P.Input>
                            <P.Input placeholder="새 비밀번호" onChange={(e)=>{setNewPassword(e.target.value)}}></P.Input>
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
                            <div className="table_area">
                                    <table className="table_title">
                                        <thead>
                                            <tr>
                                                <th>제목</th>
                                                <th>작성일</th>
                                            </tr>
                                        </thead>
                                    </table>

                                    {
                                        textList.map(() => {
                                            return (
                                                <div>
                                                    <table className="table_content">
                                                        <tbody onClick={()=>{}} className='list_hover'>
                                                            <tr className="table_feed">
                                                                <td className="table_item">asdf</td>
                                                                <td className="table_item">2022</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                        </P.Box>
                    </Tab>

                </Tabs>

            </P.BigBox>
        </div>
    )
}

export default Profile;