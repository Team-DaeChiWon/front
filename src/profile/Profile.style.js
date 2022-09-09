import styled from "styled-components";

export const BigBox = styled.div`
    background-color: white;
    width: 900px;
    height: 700px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    margin-top: 160px;
`

export const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Name = styled.h1`
    font-size: 18px;
`

export const Img = styled.img`
    width: 170px;
    height: 170px;
    border-radius: 100%;
    margin: 15px;
`

export const Box = styled.div`
    width: 600px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #F5F5F5;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
`

export const Input = styled.input`
    width: 400px;
    height: 35px;
    margin-bottom: 10px;
    margin-top: 10px;
    border: 0;
    outline: 0;
    border-radius: 10px;
    background-color: white;
`

export const fontSize = styled.div`
    font-size: 17px;
    margin-right: 290px;
`

export const Button = styled.button`
    width: 400px;
    height: 35px;
    border-radius: 10px;
    margin-top: 10px;
    border: 0;
    outline: 0;
    background-color: white;
    &:hover{
        background-color: #F5F5F5;
    }
`

export const Same = styled.div`
    font-size: 15px;
    margin-bottom: 10px;
    margin-top: -10px;
`

export const Different = styled.div`
    font-size: 15px;
    color: red;
    margin-bottom: 10px;
    margin-top: -10px;
`