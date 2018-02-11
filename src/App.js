import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Snackbar, showSnack } from 'react-redux-snackbar';
import { Row, Well, Col } from 'react-bootstrap';
import { camelCase } from 'lodash';
import MainNav from './components/Navbar';
import Artifact from './components/Artifact';
import ArtifactOptimizer from './components/ArtifactOptimizer';
import utils from './utils';

class App extends Component {
  getChildContext() {
    return {
      notify: (id, notifyText, customTimeout) => {
        return this.props.dispatch(showSnack(id, {
          label: notifyText,
          timeout: customTimeout || 5000,
          button: { label: 'x' },
        }));
      }
    }
  }
  render() {
    return (
      <Row>
        <MainNav/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Col md={10} mdOffset={1}>
          <Well className='artifact-well'>
            {
              utils.ARTIFACT_LIST.map(
                (artifactName, i) => <Artifact name={camelCase(artifactName)} key={i} />
              )
            }
          </Well>
          <ArtifactOptimizer />
        </Col>
        <Snackbar/>
      </Row>
    );
  }
}

App.childContextTypes = { notify: PropTypes.func }

export default connect()(App);
