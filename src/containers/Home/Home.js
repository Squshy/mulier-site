import React, { Component } from 'react';
import { Carousel } from 'antd';
import { Layout } from 'antd';
import './Home.less';

const { Content } = Layout;


class Home extends Component {
  render() {
    return (
        <Content>
            <Carousel autoplay>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </Carousel>
        </Content>
    );
  }
}

export default Home;
