import React, { Component } from 'react';
import { Carousel, Layout, Row, Col, Card } from 'antd';
import './Home.less';
import { Images } from '../../Themes'

const { Content } = Layout;

class Home extends Component {

    showCarouselImages() {
        return this.props.carouselImages.map((image) => {
            return (
                <div key={image.text}>
                    <h3>{image.text}</h3>
                </div>
            )
        })
    }

    render() {
        return (
            <Content>
                <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-12 py-3">
                            <Carousel autoplay>
                                {this.props.carouselImages ? this.showCarouselImages() : null}
                            </Carousel>
                        </div>
                    </div>
                </div>
                </Layout>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-4 my-5">
                            <Card 
                                style={{ textAlign: 'center' }} 
                                title="Elegant Designs" 
                                bordered={false}
                                cover={<img alt="example" src={Images.spiral1} />}
                                hoverable={true}
                                className="home-card"
                                headStyle={{color: 'white'}}
                            />
                        </div>
                        <div className="col-4 my-5">
                            <Card 
                                style={{ textAlign: 'center'}} 
                                title="Custom Jewelry" 
                                bordered={false}
                                cover={<img alt="example" src={Images.puffyBalls} />}
                                hoverable={true}
                                className="home-card"
                                headStyle={{color: 'white'}}
                            />
                        </div>
                        <div className="col-4 my-5">
                            <Card 
                                style={{ textAlign: 'center'}} 
                                title="Fashionable Wear" 
                                bordered={false}
                                cover={<img alt="example" src={Images.sohee1} />}
                                hoverable={true}
                                className="home-card"
                                headStyle={{color: 'white'}}
                            />
                        </div>
                    </div>
                </div>
            </Content>
        );
    }
}

export default Home;
