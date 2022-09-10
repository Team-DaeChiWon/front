import styled from "styled-components";

export const Background = styled.div`
  width: auto;
  height: auto;
  background-color: #eee;
`;

export const Box = styled.div`
  border-radius: 10px;
  display: flex;
`;

export const SubBox_Left = styled.div`
  //사진 들어갈 부분
  display: flex;
  width: 600px;
  height: 650px;
  border-radius: 10px 0px 0px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubBox_Right = styled.div`
  //글 & 로그인 영역
  width: 600px;
  height: 650px;
  background-color: white;
  border-radius: 0px 10px 10px 0px;
`;

export const LoginBox = styled.div`
  //글 제외 로그인 영역
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  //아이디, 비밀번호 input 영역
  width: 300px;
  height: 40px;
  border-radius: 20px;
  margin-bottom: 20px;
  outline: 0;
  border: 0;
  background-color: #eee;
  padding: 20px;
`;

export const Button = styled.button`
  //로그인 버튼 영역
  width: 307px;
  height: 45px;
  border-radius: 20px;
  border: 0;
  outline: 0;
  background-color: #8b8b8b;
  margin-top: 30px;
  color: white;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    background-color: white;
    color: black;
  }
`;

export const Keep = styled.div`
  //로그인 상태 유지 영역
  display: flex;
  margin-top: -20px;
  margin-left: -165px;
`;

export const CheckBox = styled.input`
  //체크 박스 영역
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 1px solid;
  appearance: none;
  cursor: pointer;
  margin-right: 5px;
  margin-left: 10px;
  margin-top: 4px;
`;

export const LargeFont = styled.h1`
  //제일 큰 제목
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const MiddleFont = styled.h3`
  //중간 사이즈 제목
  font-size: 15px;
  font-weight: bold;
  color: #c9c9c9;
  margin-top: 100px;
`;

export const Sub = styled.div`
  //회원가입 / 아이디찾기 / 비밀번호 찾기 페이지로 이동하는 구역
  display: flex;
  margin-top: 5px;
`;

export const Move_Register = styled.a`
  //회원가입 이동
  font-size: 12px;
  margin-left: 155px;
`;

export const Move_FindId = styled.a`
  //아이디 찾기 이동
  font-size: 12px;
  margin-left: 90px;
`;

export const Move_FindPassword = styled.a`
  //비밀번호 찾기 이동
  font-size: 12px;
  margin-left: 10px;
`;

export const Img_Part = styled.div`
  //구글, 카카오톡 소셜 로그인 이미지 구역
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Text = styled.div`
  font-size: 15px;
  color: #828282;
`;

export const Sub_LoginText = styled.div`
  font-size: 15px;
  color: #828282;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const Same = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
  margin-top: -10px;
`;

export const Different = styled.div`
  font-size: 15px;
  color: red;
  margin-bottom: 10px;
  margin-top: -10px;
`;

export const Container = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;
