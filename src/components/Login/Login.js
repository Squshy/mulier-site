import React from 'react';
import { 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Form, 
    FormGroup,
    Col,
    Row,
    Container,
    Input,
    Label
} from 'reactstrap';
import { Button } from 'antd';
import { Link } from "react-router-dom";
import './Login.less';
import Colors from '../../Themes/Colors';

const LoginModal = ({ isOpen, toggleShow }) => {
    return (
        <Modal
            isOpen={isOpen}
            toggle={toggleShow}
        >
            <ModalHeader toggle={toggleShow}>Login</ModalHeader>
            <ModalBody>
                <Form className="form">
                <Col>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="myemail@email.com"
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="********"
                    />
                    </FormGroup>
                </Col>
                <Container>
                    <Row>
                        <Col xs="12" sm="12" md="12" lg="6" xl="6" className="my-2">
                            <Button type="primary" block>Sign In</Button>
                        </Col>
                        <Col xs="12" sm="12" md="12" lg="6" xl="6" className="my-2">
                            <Button type="danger" fullWidth={true} block onClick={() => toggleShow()}>Cancel</Button>
                        </Col>
                    </Row>
                </Container>
                </Form>
            </ModalBody>
            <ModalFooter>
                <div className="container-fluid">
                    <Link to="/" className="text-center">Not yet a member? Sign up!</Link>
                </div>
            </ModalFooter>
        </Modal>
    )
}

export default LoginModal;