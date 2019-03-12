import React from 'react';
import { 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Form, 
    FormGroup,
    FormText,
    Col,
    Row,
    Container,
    Input,
    Label
} from 'reactstrap';
import { Button } from 'antd';
import { Link } from "react-router-dom";
import './Login.less';

const LoginModal = ({ isOpen, toggleShow, updateEmail, updatePassword, login, isEmailValid, loginError }) => {
    console.log(loginError)
    return (
        <Modal
            isOpen={isOpen}
            toggle={toggleShow}
        >
            <ModalHeader toggle={toggleShow}>Login</ModalHeader>
            <ModalBody>
                <Form className="form">
                <Col>
                    <FormText className="login-error">{loginError === null ? " " : loginError}</FormText>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="email"
                            valid={isEmailValid === true}
                            invalid={isEmailValid === false}
                            onChange={updateEmail}
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
                        placeholder="password"
                        onChange={updatePassword}
                    />
                    </FormGroup>
                </Col>
                <Container>
                    <Row>
                        <Col xs="12" sm="12" md="12" lg="6" xl="6" className="my-2">
                            <Button type="primary" block onClick={() => login()}>Sign In</Button>
                        </Col>
                        <Col xs="12" sm="12" md="12" lg="6" xl="6" className="my-2">
                            <Button type="danger" block onClick={() => toggleShow()}>Cancel</Button>
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