import React from 'react';
import ReactDOM from 'react-dom';
import Page from './components/Page/Page';

function Main() {
   return <Page />;
}

ReactDOM.render(
   <Main />,
   document.getElementById('root')
);