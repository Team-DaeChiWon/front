import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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

let Input = styled.input`
    
`

function Login(){

    let [id, setId] = useState()
    let [password, setPassword] = useState()

    let navigate = useNavigate();

    return(
        <Box>
            <SubBox_Left>

            </SubBox_Left>
            <SubBox_Right>
                <h1>실버존</h1>
                <h3>다른 서비스로 로그인</h3>

            </SubBox_Right>
        </Box>
    )
}

export default Login;