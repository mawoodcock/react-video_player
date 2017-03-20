import React from 'react';
import ReactDOM from 'react-dom';

//Create a new Component
const App = () => {
  return <div>Hi!</div>;
}

//Take this compentent's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
