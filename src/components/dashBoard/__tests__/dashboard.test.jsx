/* eslint-disable no-undef */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Dashboard from '../index';
import TablePage from '../tableDash';

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });
describe('dashboard Page', () => {
  const store = configureStore([thunk])({
    generatedNumber: {
      generatedNumbers: {},
    },
  });

  const props = {
    handleInput: jest.fn(),
    handleLogout: jest.fn(),
    handleSort: jest.fn(),
    handleGenerate: jest.fn(),
    generatedNumbers: [],
  };
  const state = {
    count: '',
    genNumbers: [],
  };
  it('should render the dashboard page', () => {
    const node = mount(
      <Provider store={store}>
          <Dashboard {...props} />
      </Provider>,
    );
    const component = node;
    expect(toJson(component)).toMatchSnapshot();
  });
  it('should render table', () => {
    const state2 = {
      phoneNumber: ['0987609876', '0987654398'],
    };
    const node = mount(
      <Provider store={store}>
        <MemoryRouter>
          <TablePage phoneNumbers={state2} />
        </MemoryRouter>
      </Provider>,
    );
    const component = node;
    expect(toJson(component)).toMatchSnapshot();
  });
  it('should input number of phone numbers to be generated', () => {
    const node = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Dashboard {...props} state={state} />
        </MemoryRouter>
      </Provider>,
    );
    node.find({ name: 'count' }).at(0).simulate('change', { target: { name: 'count', value: '100' } });
    node.setState({ count: 100 });
    expect(node.state('count')).toEqual(100);
  });
  it('should press button', () => {
    const node = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Dashboard {...props} state={state} />
        </MemoryRouter>
      </Provider>,
    );
    node.find({ name: 'count' }).at(0).simulate('change', { target: { name: 'count', value: '100' } });
    node.setState({ count: 100 });
    node.find('.btn.btn-white.Ripple-parent').at(0).simulate('click');
    expect(node.find('.btn.btn-white.Ripple-parent')).toHaveLength(3);
  });
  it('should press button', () => {
    const state1 = {
      count: '',
      genNumbers: ['0987609876', '0987654398'],
    };
    const node = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Dashboard {...props} state={state1} />
        </MemoryRouter>
      </Provider>,
    );
    expect(toJson(node)).toMatchSnapshot();
  });
});
