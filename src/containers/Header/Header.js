import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Layout, Menu, Icon, Alert, Modal } from 'antd';
import './Header.less';
import { Images } from '../../Themes';
import Login from '../../components/Login/Login';


class HeaderContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            current: '',
            isLoginOpen: false
        }

        this.toggleLoginModal = this.toggleLoginModal.bind(this)
    }

    toggleLoginModal() {
        this.setState({ isLoginOpen: !this.state.isLoginOpen })
        console.log('State - Login: ' + this.state.isLoginOpen)
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <div className="container">
                <Row className="header-container" id="mulier-header">
                    <Col span={24}>
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <Menu.Item key="products">
                                <Link to="/">Products</Link>
                            </Menu.Item>
                            <Menu.Item key="about">
                                <Link to="/about">About</Link>
                            </Menu.Item>
                            <Menu.Item id="mulier-header-logo">
                                <img src={Images.logo} />
                            </Menu.Item>
                            <Menu.Item key="contact">
                                <Link to="/topics">Contact</Link>
                            </Menu.Item>
                            <Menu.Item key="user" onClick={this.toggleLoginModal}>
                                <span>Login</span>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
                <Login 
                    isOpen={this.state.isLoginOpen}
                    toggleShow={this.toggleLoginModal}
                />
            </div>
        );
    }
}

export default HeaderContainer;
