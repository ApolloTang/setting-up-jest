import React from 'react';
import ReactDom from 'react-dom';
import MyComponent from './my-component.jsx';

import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

it('Enzyme setup, and renders without crashing', ()=>{
  const div = document.createElement('div');
  ReactDom.render(<MyComponent />, div);
  ReactDom.unmountComponentAtNode(div);
})


