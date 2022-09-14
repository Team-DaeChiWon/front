import styled from "styled-components";
import education1 from "../image/education1.png";
import education2 from "../image/education2.png";
import education3 from "../image/education3.png";
import { useState, useEffect } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import * as E from "./EducationPlan.style";

const data = [
  [
    {
      image: education1,
      title: "제목 2",
    },
    {
      image: education3,
      title: "제목 3",
    },
    {
      image: education2,
      title: "제목 1",
    },
    {
      image: education2,
      title: "제목 1  ",
    },
    {
      image: education1,
      title: "제목 3",
    },
    {
      image: education3,
      title: "제목 2",
    },
    {
      image: education1,
      title: "제목 1",
    },
  ],
  [
    {
      image: education1,
      title: "제목 2",
    },
    {
      image: education3,
      title: "제목 3",
    },
    {
      image: education1,
      title: "제목 2",
    },
    {
      image: education3,
      title: "제목 3",
    },
    {
      image: education2,
      title: "제목 1",
    },
  ],
  [
    {
      image: education3,
      title: "제목 3",
    },
  ],
];

const EducationPlan = () => {
  const [period, setPeriod] = useState(0);
  const [what, setWhat] = useState("월간");
  const onClickLeftBtn = () => {
    setPeriod(period - 1);
  };

  const onClickRightBtn = () => {
    setPeriod(period + 1);
  };
  useEffect(() => {
    period === 0
      ? setWhat("월간")
      : period === 1
      ? setWhat("주간")
      : setWhat("일간");
  }, [period]);

  return (
    <E.Container>
      <E.Title>
        <h1>교육 계획안</h1>
        <hr />
      </E.Title>
      <E.InfoContainer>
        <E.Date>
          {period !== 0 && (
            <AiOutlineLeft
              onClick={onClickLeftBtn}
              style={{ marginTop: "11px" }}
            />
          )}
          <p>{what}</p>
          {period !== 2 && (
            <AiOutlineRight
              onClick={onClickRightBtn}
              style={{ marginTop: "11px" }}
            />
          )}
        </E.Date>
        <E.Main>
          {data[period].map((d, i) => {
            return (
              <E.Info key={i}>
                <img src={d.image} />
                <p>{d.title}</p>
              </E.Info>
            );
          })}
        </E.Main>
      </E.InfoContainer>
    </E.Container>
  );
};

export default EducationPlan;
