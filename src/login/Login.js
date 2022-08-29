import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Main_image from '../image/login.png';
import or_img from '../image/or_img.jpg';
import google from '../image/google.png';
import kakaotalk from '../image/kakaotalk.png';
import axios from "axios";

import '../App.css';

let Box = styled.div`
    width: 950px;
    height: 550px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    display: flex;
` 

let SubBox_Left = styled.div` //사진 들어갈 부분
    display: flex;
    width: 475px;
    height: 550px;
    //background-color: #eee;
    border-radius: 10px 0px 0px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

let SubBox_Right = styled.div` //글 & 로그인 영역
    width: 475px;
    height: 550px;
    //background-color: #eee;
    border-radius: 0px 10px 10px 0px;
`

let LoginBox = styled.div` //글 제외 로그인 영역
    display: flex;
    flex-direction: column;
    align-items: center;
`

let Input = styled.input` //아이디, 비밀번호 input 영역
    width: 300px;
    height: 35px;
    border-radius: 10px;
    border: 0.5px solid;
    margin-bottom: 10px;
    //box-shadow: 1px 1px 0px 0px #8B8B8B;
    outline: 0;
    border: 1px solid black;
`

let Button = styled.button` //로그인 버튼 영역
    width: 307px;
    height: 45px;
    border-radius: 10px;
    border: 0;
    outline: 0;
    background-color: #8B8B8B;
    //box-shadow: 1px 1px 0px 0px #8B8B8B;
    margin-top: 30px;

    color: white;
    font-size: 20px;
    font-weight: bold;
    &:hover{  
        background-color : white;
        color: black;
    }
`

let Keep = styled.div` //로그인 상태 유지 영역
    display: flex;
    margin-top: -20px;
    margin-left: -165px;
`

let CheckBox = styled.input` //체크 박스 영역
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 1px solid;
    appearance: none;
    cursor: pointer;
    margin-right: 5px;
    margin-left: 10px;
    margin-top: 4px;
`

let LargeFont = styled.h1` //제일 큰 제목
    font-size: 35px;
    font-weight: bold;
    margin-left: 90px;
    margin-bottom: -5px;
    margin-top: 50px;
`

let MiddleFont = styled.h3` //중간 사이즈 제목
    font-size: 20px;
    font-weight: bold;
    color: #818181;
`

let Sub = styled.div` //회원가입 / 아이디찾기 / 비밀번호 찾기 페이지로 이동하는 구역
    display: flex;
    margin-top: 5px;
`

let Move_Register = styled.a` //회원가입 이동
    font-size: 12px;
    margin-left: 95px;
`

let Move_FindId = styled.a` //아이디 찾기 이동
    font-size: 12px;
    margin-left: 90px;
`

let Move_FindPassword = styled.a` //비밀번호 찾기 이동
    font-size: 12px;
    margin-left: 10px;
`

let Img_Part = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;
`

function Login(){

    let [id, setId] = useState()
    let [password, setPassword] = useState()

    let navigate = useNavigate();

    return(
        <Box>
            <SubBox_Left>
                <img src={Main_image} width="500px" height="500px"/>
            </SubBox_Left>
            <SubBox_Right>

                <LargeFont>실버존</LargeFont>

                <LoginBox>

                    {/* <MiddleFont>다른 서비스로 로그인</MiddleFont> */}

                    {/* <img src={or_img} width="340px" height="30px"></img> */}

                    <br/>

                    <Input placeholder="  아이디" onChange={(e)=>{
                        setId(e.target.value)
                    }}></Input>
                    <Input placeholder="  비밀번호" onChange={(e)=>{
                        setPassword(e.target.value)
                    }}></Input>

                    <br></br>

                    <Keep><CheckBox type="checkbox" name="keep"></CheckBox>로그인 상태 유지</Keep>

                    <Button onClick={()=>{
                        axios.post('',{asdf:id, asad:password})
                        .then(()=>{})
                    }}>로그인</Button>

                </LoginBox>

                <Sub>
                    <Move_Register href="/register">회원가입</Move_Register>
                    <Move_FindId href="/">아이디 찾기</Move_FindId>
                    <Move_FindPassword href="/">비밀번호 찾기</Move_FindPassword>
                    
                </Sub>

                <Img_Part>
                    <img src={google} width="50px" height="50px" className="" onClick={()=>{
                        // axios.get('https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}')
                        // .then((result)=>{})
                    }}></img>
                    <img src={kakaotalk} width="50px" height="50px" className="" onClick={()=>{}}></img>
                </Img_Part>
                

            </SubBox_Right>
        </Box>
    )
}

export default Login;