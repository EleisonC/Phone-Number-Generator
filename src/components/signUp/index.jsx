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
    /* istanbul ignore next */
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSignUp = (event) => {
    /* istanbul ignore next */
    event.preventDefault();
    /* istanbul ignore next */
    const { userName, password } = this.state;
    /* istanbul ignore next */
    if (userName.length >= 3 && password.length >= 3) {
      this.props.signUpAction(userName, password);
    } else {
      return;
    }
  }

  componentDidUpdate(prevProps) {
    const { registered } = this.props.users;
    /* istanbul ignore next */
    if (registered !== prevProps.users.registered) {
      this.props.history.push('/login');
      return;
    }
  }

  render() {
    return (
      <div>
        <div className="baserow">
          <div className="whites">
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
