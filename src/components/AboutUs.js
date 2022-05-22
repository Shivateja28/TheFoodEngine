import aboutus from '../Images/Aboutus.png'
import Carousel1 from '../Images/carousel1.png'
import Carousel2 from '../Images/carousel2.png'
import {Carousel, Container, Col, Card} from  'react-bootstrap'

function AboutUs(){
    return(
        <div>
            <div className='flex-container'>
                <div>
                    <img src = {aboutus} className = "text-center"/>
                    <p className='h4'>Lorem eaque aut quia voluptatum ab dolores  eaque aut quia voluptatum ab dolores Lorem eaque aut quia voluptatum ab dolores Lorem eaque aut quia voluptatum ab dolores  eaque aut quia voluptatum ab dolores  eaque aut quia voluptatum ab dolores eaque aut quia voluptatum ab dolores </p>
                </div>
                <div>
                    <img src = {aboutus} className = "text-center"/>
                    <p className='h4'>Lorem eaque aut quia voluptatum ab dolores  eaque aut quia voluptatum ab dolores Lorem eaque aut quia voluptatum ab dolores Lorem eaque aut quia voluptatum ab dolores  eaque aut quia voluptatum ab dolores  eaque aut quia voluptatum ab dolores eaque aut quia voluptatum ab dolores </p>
                </div>
                <div>
                    <img src = {aboutus} className = "text-center"/>
                    <p className='h4'>Lorem eaque aut quia voluptatum ab dolores  eaque aut quia voluptatum ab dolores Lorem eaque aut quia voluptatum ab dolores Lorem eaque aut quia voluptatum ab dolores  eaque aut quia voluptatum ab dolores  eaque aut quia voluptatum ab dolores eaque aut quia voluptatum ab dolores </p>
                </div>
            </div>
            
            <div>
                <Carousel>
                    <Carousel.Item interval={1500}>
                        <img src = {Carousel2}></img> 
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img src = {Carousel1}></img> 
                    </Carousel.Item>
                </Carousel>
                </div>
    </div>
    )
}

export default AboutUs