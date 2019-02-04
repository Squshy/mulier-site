import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Col } from 'antd';
import { Layout, Menu } from 'antd';
import './Header.less';
import { Images } from '../../Themes';

const { Header } = Layout;


class HeaderContainer extends Component {
  render() {
    return (
        <div className="header-container">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={4}>
                            <div className="gutter-box">
                                <Link to="/">Home</Link>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div className="gutter-box">
                                <Link to="/about">about</Link>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <img src={Images.logo} className="logo-nav"/>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div className="gutter-box">
                                <Link to="/topics">topics</Link>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div className="gutter-box">
                                <Link to="/app">app</Link>
                            </div>
                        </Col>
                    </Row>
        </div>
    );
  }
}

export default HeaderContainer;
