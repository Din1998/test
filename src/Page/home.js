import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faLinkedinIn,faYoutube } from '@fortawesome/free-brands-svg-icons'

import Marquee from "react-fast-marquee";

import img from '../imglib/Rectangle 37.jpg'

import logo from '../logo/VW.png'
import logo1 from '../logo/Togg.png'
import logo2 from '../logo/smart-ix.png'
import logo3 from '../logo/Apex logo.png'
import logo4 from '../logo/Frame.png'
import logo5 from '../logo/Primary Logo.png'


import CardComponent from '../Components/card';

function Home() {
  return (
    <Container fluid="md">
      <Row>
        <Row>
          <div className='header'>
            <ul>
              <li className='home__btn'>Zesan H.</li>
              <li><FontAwesomeIcon icon={faGlobe}/></li>
              <li><FontAwesomeIcon icon={faYoutube}/></li>
              <li><FontAwesomeIcon icon={faTwitter}/></li>
              <li><FontAwesomeIcon icon={faLinkedinIn}/></li>
              <li><FontAwesomeIcon icon={faEnvelope} /></li>
            </ul>
          </div>
        </Row>
    
         <div className='hero__ui'>
          <Row className='hero__ui'>
            <Col md={7} sm={12} className='text__box'>
            <div >
                <h1>Hello! I’m Zesan H, a software designer with 6 years of experience.</h1>
                <p>i create easy to use & minimal user experiences, design systems, and strategies. where i turn complex ideas into human-friendly solutions. my interfaces are using over 10 million happy users.</p>
                <p><span className='span__text'>side-projects:</span> ideateui, ideateicons, foodos</p>
                <div className='hero__btn'>
                  <button className='email__btn'><FontAwesomeIcon icon={faEnvelope} /> Email Me</button>
                  <button className='linkedin__btn'><FontAwesomeIcon icon={faLinkedinIn}/> LinkedIn</button>
                </div>
              </div>
            </Col>
            <Col md={5} sm={4}>
            <div className='img__box'>
              <img className='avater__img' src={img} alt='avater'/>
            </div> 
            </Col>
          </Row>
          </div>   

          <Row>
            <Col md={12}>
            <Marquee>
            <div className='group__logo'>
                <img src={logo}/>
                <img src={logo1}/>
                <img src={logo2}/>
                <img src={logo3}/>
                <img src={logo4}/>
                <img src={logo5}/>
              </div>
            </Marquee>
              
            </Col>
          </Row>

        <Row>
          <Col md={12}>
            <CardComponent />
          </Col>
          
        </Row>
      </Row>
    </Container>
  );
}

export default Home;