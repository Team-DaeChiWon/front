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
  let [checkPassword, setCheckPassword] = useState();
  let [name, setName] = useState();

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
            <L.LargeFont>SIGN UP</L.LargeFont>

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
              type="password"
              placeholder="비밀번호"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></L.Input>
            <L.Input
              type="password"
              placeholder="비밀번호 확인"
              onChange={(e) => {
                setCheckPassword(e.target.value);
              }}
            ></L.Input>
            {password != "" && checkPassword != "" ? (
              password === checkPassword ? (
                <L.Same>비밀번호가 일치합니다</L.Same>
              ) : (
                <L.Different>*비밀번호가 일치하지 않습니다*</L.Different>
              )
            ) : null}

            <L.Input
              type="text"
              placeholder="닉네임"
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></L.Input>

            <L.Button
              onClick={() => {
                axios
                  .post("", { asdf: id, asad: password, asdf: name })
                  .then(() => {});
              }}
            >
              회원가입
            </L.Button>
          </L.LoginBox>

          <L.Sub>
            <L.Move_Register href="/login">Login</L.Move_Register>
          </L.Sub>
        </L.SubBox_Right>
      </L.Box>
    </L.Container>
  );
}

export default Login;
