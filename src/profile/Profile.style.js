import styled from "styled-components";

export const Container = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

export const BigBox = styled.div`
    position: absolute;
    top: 22%;
    left: 50%;
    transform: translate(-50%);
    width: 50%;
    height: 70%;
    min-width: 500px;
    background-color: #fff;
    border-radius: 10px;
`
  // background-color: white;
  // width: 900px;
  // height: 700px;
  // margin-left: auto;
  // margin-right: auto;
  // border-radius: 10px;
  // margin-top: 160px;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Name = styled.h1`
    font-size: 18px;
    margin-bottom: 30px;
`

export const Img = styled.img`
    width: 170px;
    height: 170px;
    border-radius: 100%;
    margin: 5px;
`

export const Box = styled.div`
    width: 600px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #F5F5F5;
    margin-top: 13px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
`

export const Input = styled.input`
    width: 400px;
    height: 40px;
    margin-bottom: 15px;
    margin-top: 10px;
    border: 0;
    outline: 0;
    border-radius: 10px;
    background-color: #D9D9D9;
`

export const fontSize = styled.div`
    font-size: 17px;
    margin-right: 290px;
    margin-bottom: 20px;
    margin-top: -20px;
    font-weight: bold;
`

export const Button = styled.button`
    width: 400px;
    height: 35px;
    border-radius: 10px;
    margin-top: 10px;
    border: 0;
    outline: 0;
    background-color: black;
    color: white;
    &:hover{
        background-color: #F5F5F5;
    }
`

export const Same = styled.div`
    font-size: 15px;
    margin-bottom: 10px;
`

export const Different = styled.div`
    font-size: 15px;
    color: red;
    margin-bottom: 10px;
`

export const Table_flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const Cafe_Img = styled.div`
    width: 60px;
    height: 60px;
    background-color: #8b8b8b;
    margin-right: 20px;
`