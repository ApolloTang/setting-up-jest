import React from 'react';
import ReactDom from 'react-dom';
import Loadable from 'react-loadable';

const promise = new Promise((rs, rj)=>{
  const p = import('./component-to-lazy-load.js');
  setTimeout(()=>{ rs(p) }, 2000)
});

const MyComponent = Loadable({
  loader: ()=> promise,
  loading: ()=> <div><p>...loading</p></div>
});

export default MyComponent;
export {promise}

