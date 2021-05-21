import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './components/Page/Page';

function Main() {
   return <Page />;
}

ReactDOM.render(
   <Main />,
   document.getElementById('root')
);