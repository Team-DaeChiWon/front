import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.div`
  margin-top: 65px;
  font-size: 50px;
  width: 1450px;
  h1 {
    margin-left: 60px;
  }
  hr {
    margin: 0 auto;
    height: 10px;
    width: 1350px;
    background-color: #000000;
  }
`;

export const InfoContainer = styled.div`
  width: 1450px;
  margin-top: 10px;
  height: auto;
`;

export const Date = styled.div`
  font-size: 50px;
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;

export const Main = styled.div`
  display: grid;
  place-content: center;
  grid-template-columns: repeat(auto-fill, minmax(31%, auto));
  p {
    margin: 0 0 0 10px;
  }
`;

export const Info = styled.div`
  width: 430px;
  height: 300px;
  margin-top: 10px;
`;
