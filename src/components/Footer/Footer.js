import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Layout, Menu, Icon } from 'antd';
import './Footer.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const { Footer } = Layout;

class FooterContainer extends Component {
    render() {
        return (
            <Footer className="mulier-footer py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-s-6 col-md-4 col-lg-4">
                            <p>Mulier</p>
                            <hr/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                        <div className="col-xs-12 col-s-6 col-md-4 col-lg-4">
                            <p>Contact</p>
                            <hr/>
                            <p>123 Fake Street</p>
                            <p>Toronto, ON</p>
                            <p>289 905 2899</p>
                        </div>
                        <div className="col-xs-12 col-s-6 col-md-4 col-lg-4">
                            <p>Socials</p>
                            <hr/>
                            <a href="https://www.instagram.com/mulier.to/">
                                <FontAwesomeIcon icon={faInstagram} size="lg"/>
                                &nbsp;<span>Mulier.to</span>
                            </a>
                        </div>
                    </div>
                </div>
            </Footer>
        );
    }
}

export default FooterContainer;
