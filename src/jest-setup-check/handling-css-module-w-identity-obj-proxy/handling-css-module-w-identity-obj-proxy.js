import React from 'react'
import style from './handling-css-module-w-identity-obj-proxy.module.css'

const MyComponentWithCssModule = () => (
  <div className={style.classNameOfMyComponentWithCssModule} >
    This is a component using css module
  </div>
);

export default MyComponentWithCssModule

