import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

/**
 * @class TextInput
 * @extends {React.Component}
 * 
 * @prop title - The title of the input field
 * @prop type - The type of this input
 * @prop placeholder - The placeholder text for the input field
 * @prop value - The value that's being maintained in the parent component
 * @prop updateValue - The function that's called to update the value associated with this text field
 * @prop submit - The function that's called when the input is submitted
 */
export default class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleEnter = this.handleEnter.bind(this);
  }

  handleEnter(e){ 
    if (e.key === 'Enter' && this.props.submit) {
      this.props.submit();
    }
  }

  render() {
    return(
      <InputGroup>
        <InputGroup.Addon>
          { this.props.title }
        </InputGroup.Addon>
        <FormControl
          type={this.props.type}
          value={this.props.value}
          onChange={this.props.updateValue}
          placeholder={this.props.placeholder}
          onKeyPress={this.handleEnter}
        />
        {
          this.props.submit &&
            <InputGroup.Button>
              <Button bsStyle='success' onClick={this.props.submit}>
                <i className='fa fa-arrow-right'/>
              </Button>
            </InputGroup.Button>
        }
      </InputGroup>
    );
  }
}
