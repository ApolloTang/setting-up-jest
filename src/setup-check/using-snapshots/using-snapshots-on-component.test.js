import {getMyData} from './using-snapshots';

import 'react-testing-library/cleanup-after-each';
import {render} from 'react-testing-library';
import React from 'react';
import MyComponent from './using-snapshots-on-component';

test('Using Snapshots',  ()=>{
  const myData = getMyData();
  expect(myData).toMatchSnapshot();
});

test('Using Snapshots on component',  ()=>{
  const {container} = render(<MyComponent />);
  expect(container.innerHTML).toMatchSnapshot();
});

