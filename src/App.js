import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './containers/App/App.js';
import Home from './containers/Home/Home.js';
import Header from './containers/Header/Header.js';
import Footer from './containers/Footer/Footer.js';
import Product from './containers/Product/Product.js';
import { Layout } from 'antd';

const { Content } = Layout;


function BasicExample() {
  return (
    <Router>
        <div className="h-100 d-flex flex-column">
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/products" component={Product} />
            <Route path="/app" component={App} />
            <Footer />
        </div>
    </Router>
  );
}

function About() {
  return (
    <Content>
      <h2>About</h2>
    </Content>
  );
}

export default BasicExample;