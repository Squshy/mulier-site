import React, { Component } from 'react';
import { Card, Spin } from 'antd';
import { 
    Col,
    Row,
    Container
} from 'reactstrap';
import './Product.less';

const { Meta } = Card;

class Product extends Component {

    displayProductCards = () => {
        return this.props.products.map((prod) => {
            return (
                <Col xs="12" sm="6" md="4" lg="3" xl="3" className="my-2 text-center" key={prod._id}>
                    <Card
                        hoverable
                        cover={<img alt={prod.name + " image"} src={prod.images[0]}/>}
                    >
                    <Meta
                        title={prod.name}
                        description={prod.price}
                    />
                    </Card>
                </Col>
            )
        })
    }

    render() {
        if(this.props.fetching) {
            return (
                <Container className="h-100 py-4 d-flex">
                    <Row className="justify-content-center align-self-center mx-auto">
                        <Col xs="12" sm="12" md="12" lg="12" xl="12" className="my-2">
                            <Spin size="large"/>
                        </Col>
                    </Row>
                </Container>
            )
        } else if(!this.props.error) {
            return (
                <div>
                    <Container className="py-4">
                        <Row>
                            {
                                this.displayProductCards()
                            }
                            {
                                this.displayProductCards()
                            }
                            {
                                this.displayProductCards()
                            }
                        </Row>
                    </Container>
                </div>
            );
        } else {
            return (
                <Container className="h-100 py-4 d-flex">
                    <Row className="justify-content-center align-self-center mx-auto">
                        <Col xs="12" sm="12" md="12" lg="12" xl="12" className="my-2">
                            <h3>{this.props.error}</h3>
                        </Col>
                    </Row>
                </Container>
            );
        }
    }
}

export default Product;
