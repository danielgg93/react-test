import React from 'react'
import { render } from 'react-dom'
import Hello from './Hello'
import ImageClick from './ImageClick'
import ChangeColor from './changeColor'

const fn = function() {
  alert('mi funcion');
};


const app = (
  <div>
    <Hello />
    <ImageClick onImgClick={fn} /> 
    <ChangeColor />
  </div>
);

render(app, document.querySelector('#app'))