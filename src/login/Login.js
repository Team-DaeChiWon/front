import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Main_image from "../image/login.png";
import or_img from "../image/or_img.jpg";
import google from "../image/google.png";
import kakaotalk from "../image/kakaotalk.png";
import axios from "axios";

import "./Login.css";
import * as L from "./Login.style";

function Login() {
  let [id, setId] = useState();
  let [password, setPassword] = useState();

  let navigate = useNavigate();

  return (
    <L.Container>
      <L.Box>
        <L.SubBox_Left>
          <img src={Main_image} width="600px" height="650px" />
        </L.SubBox_Left>
        <L.SubBox_Right>
          <L.LoginBox>
            <L.MiddleFont>SILVERZONE</L.MiddleFont>
            <L.LargeFont>LOGIN</L.LargeFont>
            {/* <MiddleFont>다른 서비스로 로그인</MiddleFont> */}
            {/* <img src={or_img} width="340px" height="30px"></img> */}
            <br />
            <L.Input
              placeholder="아이디"
              onChange={(e) => {
                setId(e.target.value);
              }}
            ></L.Input>
            <L.Input
              placeholder="비밀번호"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></L.Input>

            <br></br>

            {/* <L.Keep><L.CheckBox type="checkbox" name="keep"></L.CheckBox><L.Text>로그인 상태 유지</L.Text></L.Keep> */}

            <L.Button
              onClick={() => {
                axios.post("", { asdf: id, asad: password }).then(() => {});
              }}
            >
              로그인
            </L.Button>
          </L.LoginBox>

          <L.Sub>
            <L.Move_Register href="/register">회원가입</L.Move_Register>
            <L.Move_FindId href="/">아이디 찾기</L.Move_FindId>
            <L.Move_FindPassword href="/">비밀번호 찾기</L.Move_FindPassword>
          </L.Sub>

          <L.Sub_LoginText>소셜로그인</L.Sub_LoginText>

          <L.Img_Part>
            <img
              src={google}
              width="30px"
              height="30px"
              className="google"
              onClick={() => {
                // axios.get('https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}')
                // .then((result)=>{})
              }}
            ></img>
            <img
              src={kakaotalk}
              width="30px"
              height="30px"
              className="kakaotalk"
              onClick={() => {}}
            ></img>
          </L.Img_Part>
        </L.SubBox_Right>
      </L.Box>
    </L.Container>
  );
}

export default Login;
