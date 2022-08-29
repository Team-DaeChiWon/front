import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import image from '../image/login.png';

let Box = styled.div`
    width: 900px;
    height: 550px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    display: flex;
` 

let SubBox_Left = styled.div`
    display: flex;
    width: 450px;
    height: 550px;
    background-color: #eee;
    border-radius: 10px 0px 0px 10px;
`

let SubBox_Right = styled.div`
    width: 450px;
    height: 550px;
    background-color: #eee;
    border-radius: 0px 10px 10px 0px;
`

function Register(){

    let [id, setId] = useState();
    let [password, setPassword] = useState();

    let navigate = useNavigate();

    return(
        <Box>
            <SubBox_Left>
                <img src={image}/>
            </SubBox_Left>

            <SubBox_Right>
                <h1>실버존 가입</h1>
                <input type='text' placeholder='아이디'></input>
                <input type='password' placeholder='비밀번호'></input>
                <input type='password' placeholder='비밀번호 확인'></input>
                <input type='text' placeholder='닉네임'></input>
                <input type='checkbox'/>
                <button>회원가입</button>
            </SubBox_Right>
        </Box>
    )
}

export default Register;