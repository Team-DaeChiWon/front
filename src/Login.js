import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

let Box = styled.div`
    width: 850px;
    height: 525px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    display: flex;
    box-shadow: 3px 3px 3px 3px rgb(179, 179, 179);
` 

let SubBox_Left = styled.div`
    display: flex;
    width: 425px;
    height: 525px;
    background-color: #eee;
    border-radius: 10px 0px 0px 10px;
`

let SubBox_Right = styled.div`
    width: 425px;
    height: 525px;
    background-color: #eee;
    border-radius: 0px 10px 10px 0px;
`

function Login(){

    let [id, setId] = useState()
    let [password, setPassword] = useState()

    let navigate = useNavigate();

    return(
        <Box>
            <SubBox_Left></SubBox_Left>
            <SubBox_Right></SubBox_Right>
        </Box>
    )
}

export default Login;