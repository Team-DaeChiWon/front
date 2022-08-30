import styled from 'styled-components';

export const Box = styled.div`
    width: 1200px;
    height: 650px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 140px;
    display: flex;
    background-color: aliceblue;
` 

export const SubBox_Left = styled.div` //사진 들어갈 부분
    display: flex;
    width: 600px;
    height: 650px;
    background-color: #eee;
    border-radius: 10px 0px 0px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SubBox_Right = styled.div` //글 & 로그인 영역
    width: 600px;
    height: 650px;
    //background-color: #eee;
    border-radius: 0px 10px 10px 0px;
`

export const LoginBox = styled.div` //글 제외 로그인 영역
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Input = styled.input` //아이디, 비밀번호 input 영역
    width: 300px;
    height: 35px;
    border-radius: 10px;
    border: 0.5px solid;
    margin-bottom: 10px;
    //box-shadow: 1px 1px 0px 0px #8B8B8B;
    outline: 0;
    border: 1px solid black;
`

export const Button = styled.button` //로그인 버튼 영역
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

export const Keep = styled.div` //로그인 상태 유지 영역
    display: flex;
    margin-top: -20px;
    margin-left: -165px;
`

export const CheckBox = styled.input` //체크 박스 영역
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

export const LargeFont = styled.h1` //제일 큰 제목
    font-size: 35px;
    font-weight: bold;
    margin-left: 90px;
    margin-bottom: -5px;
    margin-top: 50px;
`

export const MiddleFont = styled.h3` //중간 사이즈 제목
    font-size: 20px;
    font-weight: bold;
    color: #818181;
`

export const Sub = styled.div` //회원가입 / 아이디찾기 / 비밀번호 찾기 페이지로 이동하는 구역
    display: flex;
    margin-top: 5px;
`

export const Move_Register = styled.a` //회원가입 이동
    font-size: 12px;
    margin-left: 95px;
`

export const Move_FindId = styled.a` //아이디 찾기 이동
    font-size: 12px;
    margin-left: 90px;
`

export const Move_FindPassword = styled.a` //비밀번호 찾기 이동
    font-size: 12px;
    margin-left: 10px;
`

export const Img_Part = styled.div` //구글, 카카오톡 소셜 로그인 이미지 구역
    display: flex;
    justify-content: center;
    margin-top: 20px;
`