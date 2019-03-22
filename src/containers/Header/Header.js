import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as loginActions from '../../actions/LoginActions';
import { Link } from "react-router-dom";
import { Row, Col, Menu } from 'antd';
import './Header.less';
import { Images } from '../../Themes';
import Login from '../../components/Login/Login';


class HeaderContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            login: props.loginState,
            current: '',
            isLoginOpen: false,
            email: null,
            password: null,
            validate: {
                emailState: null,
                passwordState: null
            }
        }

        this.toggleLoginModal = this.toggleLoginModal.bind(this)
        this.updateEmail = this.updateEmail.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
        this.login = this.login.bind(this)
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.loginState !== prevState.login){
            return { login: nextProps.loginState};
        }
        else return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.loginState !== this.props.loginState){
            this.setState({login: this.props.loginState});
        }
      }

    updateEmail(e) {
        this.setState({ email: e.target.value })
    }

    updatePassword(e) {
        this.setState({ password: e.target.value })
    }

    toggleLoginModal() {
        this.props.clearLoginError()
        this.setState({ isLoginOpen: !this.state.isLoginOpen })
    }

    handleClick = (e) => {
        if(e.key !== "user")
            this.setState({
                current: e.key,
            });
    }

    login() {
        this.props.login(this.state.email, this.state.password)
    }

    validateEmail(e) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state.validate
        if (emailRex.test(e.target.value)) {
            validate.emailState = true
        } else {
            validate.emailState = false
        }
        this.setState({ validate })
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
                                <Link to="/products">Products</Link>
                            </Menu.Item>
                            <Menu.Item key="about">
                                <Link to="/about">About</Link>
                            </Menu.Item>
                            <Menu.Item id="mulier-header-logo">
                                <Link to="/"><img src={Images.logo} alt="Mulier Logo"/></Link>
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
                    updateEmail={this.updateEmail}
                    updatePassword={this.updatePassword}
                    isEmailValid={this.state.validate.emailState}
                    login={this.login}
                    loginError={this.state.login.loginError}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => {
            dispatch(loginActions.LoginRequest(email, password))
        },
        clearLoginError: () => {
            dispatch(loginActions.ClearError())
        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: { ...state.user },
        loginState: { ...state.login }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer);
