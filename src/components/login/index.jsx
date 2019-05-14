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
    event.preventDefault();
    const { userName, password } = this.state;
    this.handleValidation(userName, password)
  }

  componentDidUpdate(prevProps) {
    const { currentUser } = this.props.users;
    if (currentUser !== prevProps.users.currentUser) {
      this.props.history.push('/Dashboard');
      return;
    }
  }

  handleValidation = (userName, password) => {
    const { registered } = this.props.users;
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
            <p className="reds"> I AM BLACK AND WHITE</p>
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
