import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import User from '../components/User'

describe('<User />',()=>{
  const user = {name: 'Jason'}
  it('renders a list react element',()=>{
    const wrapper = shallow(<User user={user}/>);
    expect(wrapper.find('li').text()).to.equal(user.name);
  });
});
