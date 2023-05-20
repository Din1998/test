import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import cardImg from'../imglib/Space Gray.jpg'

export default function CardComponent() {
  return(
    <Row>
      <Col md={12}>
        <div className='view__btn--sec'>
        <button className='view__btn'>View Togg T10X</button>
        </div>
      
      <div className='card__body'>
      
      <div className='card__text'>
          <div className='text'>
            <p>Finance, Fintech, Website, Saas, Admin, Ux Design</p>
            <h1>Apex Markets - Client and Admin</h1>
            <div className='card__group__btn'>
              <button className='card__btn'>Case Study</button>
              <button className='card__btn'>Live Website</button>
            </div>
          </div>
      </div>
      </div>
      </Col>
    </Row>
    
  )
}