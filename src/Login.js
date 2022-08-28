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
    width: 280px;
    height: 30px;
    border-radius: 10px;
    border: 0.5px solid;
    margin-bottom: 10px;
    //box-shadow: 1px 1px 0px 0px #8B8B8B;
`

let Button = styled.button`
    width: 287px;
    height: 33px;
    border-radius: 10px;
    border: 0;
    outline: 0;
    background-color: #8B8B8B;
    //box-shadow: 1px 1px 0px 0px #8B8B8B;
    margin-top: 20px;

    &:hover{  
        background-color : white;
        color: black;
    }
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

                <Input placeholder="  아이디"></Input>
                <Input placeholder="  비밀번호"></Input>
                <br></br>
                <input type="checkbox" name="keep"></input>
                <div>로그인 상태 유지</div>
                <Button>로그인</Button>
            </SubBox_Right>
        </Box>
    )
}

export default Login;