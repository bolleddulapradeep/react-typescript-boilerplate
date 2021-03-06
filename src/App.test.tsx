import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('App Component', () => {
  it('should render without any error', () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.debug());
    expect(wrapper.length).toBe(1);
  });
});
