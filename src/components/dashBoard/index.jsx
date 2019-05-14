/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
// import { connect } from 'react-redux';
import {
  MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn,
} from 'mdbreact';
import phoneNumberGen from '../../utilities/phoneNumberGen';
import { loginAction } from '../../redux/actions/login/loginActions';
import { phoneNumberGenAction } from '../../redux/actions/phoneNumberGen/numGeneratorActions';
import { connect } from 'react-redux';
import { CSVLink } from 'react-csv';
import TablePage from './tableDash';

class Dashboard extends Component {
  state = {
    count: '',
    genNumbers: [],
  }

  componentDidUpdate(prevProps) {
    const { generatedNumbers } = this.props.generatedNumbers;
    if (generatedNumbers !== prevProps.generatedNumbers.generatedNumbers) {
      const newNumberCount = generatedNumbers.length - prevProps.generatedNumbers.generatedNumbers.length
      this.setState({
        genNumbers: generatedNumbers,
        numberCount: newNumberCount,
      });
    }
  }

  componentDidMount() {
    const { generatedNumbers } = this.props.generatedNumbers;
    this.setState({genNumbers: generatedNumbers});
  }
  handleSort = (event) => {
    event.preventDefault();
    const { value } = event.target;
    const { genNumbers } = this.state;
    if (value === '1') {
      const asscgenNumbers = genNumbers.sort((a, b) => 0 - (a > b ? -1 : 1))
      this.setState({genNumbers: asscgenNumbers})
    } else if (value === '2') {
      const asscgenNumbers = genNumbers.sort((a, b) => 0 - (a > b ? 1 : -1))
      this.setState({genNumbers: asscgenNumbers})
    } else {
      return;
    }
  };

  handleLogout = async () => {
    this.props.phoneNumberGenAction('clear');
    this.props.loginAction('clear', null, null);
    await this.props.history.push('/login');
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleGenerate = async () => {
    const phoneNumbers = new phoneNumberGen();
    const { count } = this.state;
    if (count.length > 0) {
      const nums = await phoneNumbers.generate(count);
      this.props.phoneNumberGenAction(nums);
    } else {
      return;
    }
  }

  render() {
    const { genNumbers } = this.state;
    return (
      <React.Fragment>
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol md="3" className="blackDashboard">
              <MDBRow className="phoneNumberGenerator">
                <MDBCol md="12">
                  <MDBInput
                  label="You have 10000 more numbers"
                  background size="lg"
                  name="count"
                  onChange={this.handleInput}
                  />
                  {genNumbers.length > 10000 ? 
                  <MDBBtn
                  onClick={this.handleGenerate}
                  disabled
                  color="white">
                  Generate Phone Numbers
                  </MDBBtn>
                  :
                  <MDBBtn
                  onClick={this.handleGenerate}
                  color="white">
                  Generate Phone Numbers
                  </MDBBtn>
                  }
                </MDBCol>
              </MDBRow>
              <MDBRow className="sortField">
                <select onChange={this.handleSort} className="browser-default custom-select sortSelect">
                  <option>Choose Your Sort Option</option>
                  <option value="1">Ascending</option>
                  <option value="2">Descending</option>
                </select>
              </MDBRow>
              <MDBRow className="sortField">
              {genNumbers.length > 0 ? 
                <MDBBtn color="white" className="downloadButton">
                <CSVLink data={[genNumbers]} filename={'my-phone-file.csv'}>
                  Download Phone Numbers
                </CSVLink>
                </MDBBtn> 
                : 
                <MDBBtn color="white" className="downloadButton" disabled>
                <CSVLink data={[genNumbers]} filename={'my-phone-file.csv'}>
                  Download Phone Numbers
                </CSVLink>
                </MDBBtn>}
              </MDBRow>
              <MDBRow className="sortField">
                <MDBBtn
                color="white"
                className="downloadButton"
                onClick={this.handleLogout}>
                LOGOUT
                </MDBBtn>
              </MDBRow>
            </MDBCol>
            <MDBCol md="9" className="whiteDashboard">
              <TablePage phoneNumbers={genNumbers} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  generatedNumbers: state.generatedNumber,
});

export default connect(mapStateToProps, { phoneNumberGenAction, loginAction })(Dashboard);
