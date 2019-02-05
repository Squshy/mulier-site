import React, { Component } from 'react';
import { Carousel, Layout, Row, Col } from 'antd';
import './Home.less';

const { Content } = Layout;

class Home extends Component {

    showCarouselImages() {
        return this.props.carouselImages.map((image, index) => {
            return (
                <div key={image.text}>
                    <div className="carousel-image-container">
                        <img src={image.image} alt=""/>
                    </div>
                    <h3>{image.text}</h3>
                </div>
            )
        })
    }

    render() {
        return (
            <Content>
                <Row type="flex" justify="center" >
                    <Col span="18" style={{padding: 10}}>
                        <Carousel autoplay>
                            {this.props.carouselImages ? this.showCarouselImages() : null}
                        </Carousel>
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default Home;
