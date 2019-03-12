import React, { Component } from 'react';
import { Carousel, Layout, Card } from 'antd';
import './Home.less';
import { Images, Colors } from '../../Themes'

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
            <div>
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
                {/*
                    Move into images component
                */}
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-4 col-sm-8 col-xs-12 py-5">
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
                        <div className="col-lg-4 col-md-4 col-sm-8 col-xs-12 py-5">
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
                        <div className="col-lg-4 col-md-4 col-sm-8 col-xs-12 py-5">
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
                <Layout>
                    <div className="container">
                        <div className="row justify-content-center py-4">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 py-4" 
                                style={{backgroundColor: 'white'}}>
                                <h1 style={{ color: Colors.primary}}><i>We are Mulier</i></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
        );
    }
}

export default Home;
