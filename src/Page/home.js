import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faLinkedinIn,faYoutube } from '@fortawesome/free-brands-svg-icons'

import img from '../imglib/Rectangle 37.jpg'

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
        <Row>
          <Col md={7}>
            <div className='text__box'>
              <h1>Hello! I’m Zesan H, a software designer with 6 years of experience.</h1>
              <p>i create easy to use & minimal user experiences, design systems, and strategies. where i turn complex ideas into human-friendly solutions. my interfaces are using over 10 million happy users.</p>
              <p><span className='span__text'>side-projects:</span> ideateui, ideateicons, foodos</p>
              <div className='hero__btn'>
                <button className='email__btn'><FontAwesomeIcon icon={faEnvelope} />Email Me</button>
                <button className='linkedin__btn'><FontAwesomeIcon icon={faLinkedinIn}/>LinkedIn</button>
              </div>
            </div>
          </Col>
          <Col md={5}>
            <img className='avater__img' src={img} alt='avater'/>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Home;