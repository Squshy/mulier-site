import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './containers/App/App.js';
import Home from './containers/Home/Home.js';
import Header from './containers/Header/Header.js';
import { Layout } from 'antd';

const { Content } = Layout;


function BasicExample() {
  return (
    <Router>
      <Layout>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/app" component={App} />
      </Layout>
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

function Topics({ match }) {
  return (
    <Content>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </Content>
  );
}

function Topic({ match }) {
  return (
    <Content>
      <h3>{match.params.topicId}</h3>
    </Content>
  );
}

export default BasicExample;