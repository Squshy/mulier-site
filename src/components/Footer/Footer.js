import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Layout, Menu, Icon } from 'antd';
import './Footer.less';
import { Images } from '../../Themes';

const { Footer } = Layout;

class FooterContainer extends Component {
    state = {

    }


    render() {
        return (
            <Footer className="mulier-footer py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-s-6 col-md-4 col-lg-4">
                            <p>Mulier</p>
                            <hr/>
                        </div>
                        <div className="col-xs-12 col-s-6 col-md-4 col-lg-4">
                            <p>HEYY</p>
                            <hr/>
                        </div>
                        <div className="col-xs-12 col-s-6 col-md-4 col-lg-4">
                            <p>HEYY</p>
                            <hr/>
                        </div>
                    </div>
                </div>
            </Footer>
        );
    }
}

export default FooterContainer;
