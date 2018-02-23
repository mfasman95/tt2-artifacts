import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Well, InputGroup, FormControl, DropdownButton, MenuItem } from 'react-bootstrap';
import { ARTIFACT_EXPONENTS } from './../utils';

class Artifact extends Component {
  constructor(...args){
    super(...args);

    this.state = {
      suggestions: {
        a: '1',
      },
    }

    this.updateArtifact = this.updateArtifact.bind(this);
  }

  updateArtifact(artifact, prop, value) {
    return this.props.dispatch({
      type: 'UPDATE_ARTIFACT',
      artifact,
      prop,
      value,
    });
  }

  render() {
    return (
      <Well>
        <InputGroup>
          <InputGroup.Addon>Artifact Amount</InputGroup.Addon>
          <FormControl type='text'></FormControl>
          <InputGroup.Button>
            <DropdownButton
              title={'title'}
              id='blah'
            >
              {
                ARTIFACT_EXPONENTS.map((exponent, i) => (
                  <MenuItem
                    key={i}
                    id={`${exponent}`}
                  >
                    {exponent}
                  </MenuItem>
                ))
              }
            </DropdownButton>
          </InputGroup.Button>
        </InputGroup>
        {
          Object.keys(this.state.suggestions).length > 0 &&
            <div>
              You've got suggestions!
            </div>
        }
      </Well>
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
