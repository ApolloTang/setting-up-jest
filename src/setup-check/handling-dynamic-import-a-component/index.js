import React from 'react';
import ReactDom from 'react-dom';

import LazyLoadAComponent from './lazy-load-a-component.js';

const portal = document.createElement('div')
document.body.appendChild(portal)

ReactDom.render(<div><LazyLoadAComponent /></div>, portal)
