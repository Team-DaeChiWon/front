import React from "react"
import Header from "../Header";
import MainImg from "../image/main.svg"
import MainImg1 from "../image/main1.svg"
import MainImg2 from "../image/main2.svg"
import Footer from "../image/footer.svg"
import '../style/main.css'

import {Carousel} from 'react-bootstrap';

function Main(){
  return(
    <>
    <Header/>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MainImg}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MainImg1}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MainImg2}
        />
      </Carousel.Item>
    </Carousel>
    
    <img  className='footer' src={Footer}/>

    </>
  )
}

export default Main;