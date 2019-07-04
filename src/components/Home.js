import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Logo1 from '../assets/media/images/Hero-bra1.jpg';
import Logo2 from '../assets/media/images/Hero-bra2.jpg';
import Logo3 from '../assets/media/images/Hero-bra3.jpg';


const style = {
    width: '100%',
    height: '100vh',
}

const shader = {
    opacity: '0.95',
}


class Home extends Component {

    render() {
        return (
            <div style={shader}>
                <Carousel className="fluent"
                    fade={true}
                    interval={3000}>
                    <Carousel.Item style={style}>
                        <img className="img-fluid"
                            src={Logo1}
                            alt="Third slide" />

                        <Carousel.Caption>
                            <h3 >First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item style={style}>
                        <img className="img-fluid"
                            src={Logo2}
                            alt="Third slide" />
                        <Carousel.Caption >
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item style={style}>
                        <img className="img-fluid"
                            src={Logo3}
                            alt="Third slide" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
export default Home

