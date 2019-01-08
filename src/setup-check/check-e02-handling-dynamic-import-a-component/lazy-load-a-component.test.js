import React from 'react';
import ReactDom from 'react-dom';

import 'react-testing-library/cleanup-after-each';
import {render} from 'react-testing-library';

import LazyLoadAComponent from './lazy-load-a-component.js';
import {promise} from './lazy-load-a-component.js';

test('lazy load a component', async done => {

  const {container:beforeLoad} = render(<LazyLoadAComponent />);
  expect(beforeLoad.firstChild).toMatchSnapshot();

  await promise;

  const {container:afterLoad} = render(<LazyLoadAComponent />);
  expect(afterLoad.firstChild).toMatchSnapshot();

  done();
})



