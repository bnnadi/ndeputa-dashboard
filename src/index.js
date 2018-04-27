import React from 'react';
import ReactDOM from 'react-dom';
import NdeputaApp from './ndeputaApp';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';

if (process.env.NODE_ENV !== 'production') {
    localStorage.setItem('debug', 'Ndeputa:*');
}

ReactDOM.render(<NdeputaApp />, document.getElementById('root'));

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./ndeputaApp.js', () => {
    const NextApp = require('./ndeputaApp').default;
    ReactDOM.render(<NextApp />, document.getElementById('root'));
  });
}
registerServiceWorker();
