/* eslint-disable react/prefer-stateless-function */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginFormPage from './loginCom';
import { loginAction } from '../../redux/actions/login/loginActions';

class Login extends Component {
  state = {
    userName: '',
    password: '',
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLogin = (event) => {
    /* istanbul ignore next */
    event.preventDefault();
    /* istanbul ignore next */
    const { userName, password } = this.state;
    /* istanbul ignore next */
    this.handleValidation(userName, password)
  }

  componentDidUpdate(prevProps) {
    /* istanbul ignore next */
    const { currentUser } = this.props.users;
    /* istanbul ignore next */
    if (currentUser !== prevProps.users.currentUser) {
      this.props.history.push('/Dashboard');
      return;
    }
  }

  handleValidation = (userName, password) => {
    /* istanbul ignore next */
    const { registered } = this.props.users;
    /* istanbul ignore next */
    if (registered[userName] === password) {
      this.props.loginAction(null, userName, password);
    } else {
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
            <LoginFormPage handleInput={this.handleInput} handleLogin={this.handleLogin}/>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  users: state.userData,
});

export default connect(mapStateToProps, { loginAction })(Login);
