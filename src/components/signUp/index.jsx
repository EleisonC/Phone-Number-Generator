/* eslint-disable react/prefer-stateless-function */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUpFormPage from './signUpCom';
import { signUpAction } from '../../redux/actions/signUp/signUpActions';

class Signup extends Component {
  state = {
    userName: '',
    password: '',
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSignUp = (event) => {
    event.preventDefault();
    const { userName, password } = this.state;
    this.props.signUpAction(userName, password);
  }

  render() {
    return (
      <div>
        <div className="baserow">
          <div className="whites">
            <p className="reds"> I AM BLACK AND WHITE</p>
          </div>
          <div className="blacks">
            <SignUpFormPage handleInput={this.handleInput} handleSignUp={this.handleSignUp}/>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  users: state.userData,
});

export default connect(mapStateToProps, { signUpAction })(Signup);
