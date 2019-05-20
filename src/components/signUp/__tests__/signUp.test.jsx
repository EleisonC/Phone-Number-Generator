/* eslint-disable no-undef */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Signup from '..';

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Sign Up Page', () => {
  const store = configureStore([thunk])({
    userData: {},
  });

  const props = {
    handleInput: jest.fn(),
    handleSignUp: jest.fn(),
  };
  it('should render the sign up page', () => {
    const node = shallow(
      <Provider store={store}>
        <MemoryRouter>
          <Signup {...props} />
        </MemoryRouter>
      </Provider>,
    );
    const component = node.dive();
    expect(toJson(component)).toMatchSnapshot();
  });
  it('it should handle input changes', () => {
    const node = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Signup {...props} />
        </MemoryRouter>
      </Provider>,
    );
    expect(
      node.find('.whiteLabel').at(0).simulate('change', { target: { name: 'userName', value: 'chris' } }),
    );
  });
  it('it should handle input changes', () => {
    const node = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Signup {...props} />
        </MemoryRouter>
      </Provider>,
    );
    expect(
      node.find({ name: 'password' }).at(1).simulate('change', { target: { name: 'password', value: '1234' } }),
    );
  });
  it('it should handle input changes', () => {
    const node = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Signup {...props} />
        </MemoryRouter>
      </Provider>,
    );
    node.find('.whiteLabel').at(0).simulate('change', { target: { name: 'userName', value: 'chris' } });
    node.find({ name: 'password' }).at(1).simulate('change', { target: { name: 'password', value: '1234' } });
    expect(
      node.find('.btn.btn-elegant.Ripple-parent').simulate('click'),
    );
  });
});
