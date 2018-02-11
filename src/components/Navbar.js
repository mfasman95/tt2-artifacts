import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navbar, ButtonGroup, DropdownButton, ToggleButtonGroup, MenuItem, ToggleButton } from 'react-bootstrap';
import utils from './../utils';

const DropdownSelector = (props) => {
  const formatOption = option => `${option.charAt(0).toUpperCase()}${option.slice(1)}`;
  return (
    <DropdownButton
      bsStyle = { props.bsStyle || 'primary' }
      title = { `${props.title} (${formatOption(props.default)})` }
      id={`${props.title}-dropdown`}
    >
      {
        props.options.map(
          (option, i) => (
            <MenuItem
              eventKey={`${i}`}
              onClick={()=>props.handleSelect(option)}
              key={i}
            >
              { formatOption(option) }
            </MenuItem>
          )
        )
      }
    </DropdownButton>
  )
}

class MainNav extends React.Component {
  constructor(...props) {
    super(...props);

    this.state = {
      toggleGroup: this.props.toggleGroup,
    }

    this.handleToggleGroup = this.handleToggleGroup.bind(this);
  }

  handleToggleGroup(e) {
    this.setState({ toggleGroup: e });
    this.props.dispatch({
      type: 'UPDATE_TOGGLE_GROUP',
      toggleGroup: e,
    });
  }

  render() {
    return (
      <Navbar fixedTop inverse>
        <Navbar.Header>
          <Navbar.Brand>
            TT2 Artifact Optimizer
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullRight>
            <ButtonGroup>
              <DropdownSelector
                title='Theme'
                default={ this.props.theme }
                options={utils.THEME_OPTIONS}
                handleSelect={ theme => this.props.dispatch({ type: 'SET_THEME', theme }) } 
              />
              <DropdownSelector
                title='Build'
                default={ this.props.buildType }
                options={ utils.BUILD_OPTIONS }
                handleSelect={ buildType => this.props.dispatch({ type: 'SET_BUILD', buildType }) } 
              />
              <DropdownSelector
                title='Hero Damage Type'
                default={ this.props.heroDamageType }
                options={ utils.HERO_DAMAGE_TYPES }
                handleSelect={ heroDamageType => this.props.dispatch({ type: 'SET_HERO_DAMAGE_TYPE', heroDamageType }) } 
              />
              <DropdownSelector
                title='Hero Type'
                default={ this.props.heroType }
                options={ utils.HERO_TYPES }
                handleSelect={ heroType => this.props.dispatch({ type: 'SET_HERO_TYPE', heroType }) } 
              />
              <DropdownSelector
                title='Playstyle'
                default={ this.props.playstyle }
                options={ utils.PLAYSTYLES }
                handleSelect={ playstyle => this.props.dispatch({ type: 'SET_PLAYSTYLE', playstyle }) } 
              />
            </ButtonGroup>
            <br/>
            <ToggleButtonGroup
              type='checkbox'
              value={this.state.toggleGroup}
              onChange={this.handleToggleGroup}
            >
              <ToggleButton value='rounding'>
                Rounding {this.state.toggleGroup.includes('rounding') ? 'On': 'Off'}
              </ToggleButton>
              <ToggleButton value='showExtraDetails'>
                {this.state.toggleGroup.includes('showExtraDetails') ? '': 'Not '}Showing Extra Details
              </ToggleButton>
            </ToggleButtonGroup>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

MainNav.contextTypes = {
  notify: PropTypes.func,
}

//Function to map the redux state to object properties
const mapStateToProps = (state, ownProps) => {
  return {
    theme: state.main.theme,
    toggleGroup: state.main.toggleGroup,
    buildType: state.playstyle.buildType,
    heroDamageType: state.playstyle.heroDamageType,
    heroType: state.playstyle.heroType,
    playstyle: state.playstyle.playstyle,
  }
};

export default connect(mapStateToProps)(MainNav);
