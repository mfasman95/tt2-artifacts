import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navbar, ButtonGroup, FormGroup, DropdownButton, MenuItem } from 'react-bootstrap';
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
  render() {
    return (  
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            TT2 Artifact Optimizer
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Form pullRight>
          <FormGroup>
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
          </FormGroup>
        </Navbar.Form>
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
    roundingModeOn: state.main.roundingModeOn,
    buildType: state.playstyle.buildType,
    heroDamageType: state.playstyle.heroDamageType,
    heroType: state.playstyle.heroType,
    playstyle: state.playstyle.playstyle,
  }
};

export default connect(mapStateToProps)(MainNav);
