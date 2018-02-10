import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, Button, ButtonGroup, Row, Col } from 'react-bootstrap';
import TextInput from './TextInput';

const increaseOptions = [1, 10, 100, 1000];
const ModLevelButtonGroup = props => (
  <ButtonGroup vertical block>
    {
      increaseOptions.map((option, i) => (
        <Button
          key={i}
          bsStyle={props.bsStyle}
          onClick={()=>props.onClick(option)}
        >
          {(props.type === 'addition') ? '+' : '-'}{option}
        </Button>
      ))
    }
  </ButtonGroup>
)

class Artifact extends Component {
  constructor(...args){
    super(...args);

    this.state = {
      artifactLevel: this.props.artifacts[this.props.name].level,
    }

    this.updateArtifact = this.updateArtifact.bind(this);
    this.updateArtifactLevel = this.updateArtifactLevel.bind(this);
  }

  updateArtifact(prop, value) {
    return this.props.dispatch({
      type: 'UPDATE_ARTIFACT',
      artifact: this.props.name,
      prop,
      value,
    });
  }

  updateArtifactLevel(e) {
    const artifactLevel = (e.target.value < 0) ? 0 : e.target.value;
    this.setState({ artifactLevel });
    this.updateArtifact('level', artifactLevel);
  }

  render() {
    const { name, checked, level } = this.props.artifacts[this.props.name];
    return (
      <Panel className='artifact-panel' bsStyle={checked ? 'success' : 'danger'}>
        <Panel.Heading>
          <Panel.Title style={{width:'100%'}}>
          <Button
            block
            bsStyle={checked ? 'success' : 'danger'}
            onClick={e => {
              e.preventDefault();
              return this.updateArtifact('checked', !checked)
            }}
          >
            {name}{' '}<i className={`fa fa${checked ? '-check' : ''}-square-o text-info`}/>
          </Button>
        </Panel.Title>  
        </Panel.Heading>
        <Panel.Body className='text-center'>
          <TextInput
            title='Level'
            type='number'
            value={this.state.artifactLevel}
            updateValue={this.updateArtifactLevel}
          />
          { 
            false &&
              <Row>
                <Col xs={6}>
                  <ModLevelButtonGroup
                    bsStyle='success'
                    type='addition'
                    onClick={amount => this.updateArtifactLevel({ target: { value: parseInt(level, 10) + parseInt(amount, 10) } })}
                  />
                </Col>
                <Col xs={6}>
                  <ModLevelButtonGroup
                    bsStyle='danger'
                    type='subtraction'
                    onClick={amount => this.updateArtifactLevel({ target: { value: parseInt(level, 10) - parseInt(amount, 10) } })}
                  />
                </Col>
              </Row>
          }
        </Panel.Body>
      </Panel>
    );
  }
}

//Function to map the redux state to object properties
const mapStateToProps = (state, ownProps) => {
  return {
    artifacts: state.artifacts,
  }
};

export default connect(mapStateToProps)(Artifact);
