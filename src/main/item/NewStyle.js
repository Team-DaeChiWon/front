import styled from 'styled-components';

export const NewBox=styled.div`
  position: absolute;
  left: 13%;
  top:10%;
  border-radius:20px;
  width:90%;
  height:22%;
  background-color:#fff;
`

export const H2=styled.div`
  position: absolute;
  width: 100%;
  font-size:26px;
  font-weight:700;
  padding:30px 20px 0px;
`

export const Nb=styled.div`
  width:300px;
  height:200px;
  float:left;
  margin:20px;
  background:#000;
  color:#fff;
`

export const nameBox=styled.div`
  position:absolute;
  bottom:8%;
  width: 100%;
  overflow: scroll;
  overflow: auto;
  white-space: nowrap;
`

export const plus = styled.button`
  width:80px;
  height:34px;
  font-size:16px;
  border:none;
  border-radius:4px;
  background:#000;
  color:#fff;
  position: absolute;
  bottom: 2%;
  right: 4%;
  &:hover,
  &:focus{
    outline: 4px solid #579aff85;
  }
`