import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Layout, Menu, Icon } from 'antd';
import './Header.less';
import { Images } from '../../Themes';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { Header } = Layout;

class HeaderContainer extends Component {
    state = {
        current: '',
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <Header className="header-container">
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
                    <Menu.Item key="user">
                        <Link to="/app">Login</Link>
                    </Menu.Item>
                </Menu>
            </Header>
        );
    }
}

export default HeaderContainer;
