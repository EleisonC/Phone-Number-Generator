/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
// import { connect } from 'react-redux';
import {
  MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn,
} from 'mdbreact';
import phoneNumberGen from '../../utilities/phoneNumberGen';
import { phoneNumberGenAction } from '../../redux/actions/phoneNumberGen/numGeneratorActions';
import { connect } from 'react-redux';
import TablePage from './tableDash';

class Dashboard extends Component {
  state = {
    count: '',
    genNumbers: [],
  }

  componentDidUpdate(prevProps) {
    console.log('red Man')
    const { generatedNumbers } = this.props.generatedNumbers;
    if (generatedNumbers !== prevProps.generatedNumbers.generatedNumbers) {
      this.setState({genNumbers: generatedNumbers});
    }
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

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleGenerate = async () => {
    const phoneNumbers = new phoneNumberGen();
    const { count } = this.state;
    const nums = await phoneNumbers.generate(count);
    this.props.phoneNumberGenAction(nums);
  }

  render() {
    const { genNumbers } = this.state;
    console.log(genNumbers, 'yes render')
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
                  <MDBBtn
                  onClick={this.handleGenerate}
                  color="white">
                  Generate Phone Numbers
                  </MDBBtn>
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
                <MDBBtn color="white" className="downloadButton">Download Phone Numbers</MDBBtn>
              </MDBRow>
              <MDBRow className="sortField">
                <MDBBtn color="white" className="downloadButton">LOGOUT</MDBBtn>
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

export default connect(mapStateToProps, { phoneNumberGenAction })(Dashboard);
