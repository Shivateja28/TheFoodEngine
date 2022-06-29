import aboutus from '../Images/Aboutus.png'
import Carousel1 from '../Images/carousel1.png'
import Carousel2 from '../Images/carousel2.png'
import {Carousel, Container, Col, Card} from  'react-bootstrap'
import teja from '../Images/teja.jpeg'
import varun from '../Images/varun.jpeg'
import praveen from '../Images/praveen.jpeg'
import aditya from '../Images/aditya.jpeg'
import {Modal, Button} from 'react-bootstrap'
import { useEffect, useState } from 'react';



function AboutUs(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    return(
        <div>
            <div className='flex-container'>
                <div className="flip-card mx-auto m-3">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={praveen} className = "flip" />
                        </div>
                        <div className="flip-card-back">
                            <p className='h1'>Praveen</p> 
                            <p>20071A0508</p> 
                            
                        </div>
                    </div>
                </div>
                <div className="flip-card mx-auto m-3">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={varun} className = "flip" />
                        </div>
                        <div className="flip-card-back">
                            <p className='h1'>Varun</p> 
                            <p>20071A0508</p> 
                            
                        </div>
                    </div>
                </div>
                <div className="flip-card mx-auto m-3">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={teja} className = "flip" />
                        </div>
                        <div className="flip-card-back">
                            <p className='h1'>Shiva Teja</p> 
                            <p>20071A0508</p> 
                            
                        </div>
                    </div>
                </div>
                <div className="flip-card mx-auto m-3">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={aditya} className = "flip" />
                        </div>
                        <div className="flip-card-back">
                        <p className='h1'>Sriram Aditya</p> 
                            <p>20071A0508</p> 
                             
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default AboutUs