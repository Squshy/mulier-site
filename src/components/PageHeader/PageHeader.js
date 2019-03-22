import React, { Component } from 'react';
import { Layout } from 'antd';
import { 
    Col,
    Row,
    Container
} from 'reactstrap';
import './PageHeader.less';

class PageHeader extends Component {
    render() {
        return (
            <Layout>
                <Container className="py-4">
                    <Row>
                        <Col className="text-center">
                            <h1 id="mulier-page-header">{this.props.title}</h1>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        );
    }
}

export default PageHeader;
