import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import '@blueprintjs/core/lib/css/blueprint.css';
import './index.css';

if (process.env.NODE_ENV !== 'production') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render');
    whyDidYouRender(React);
}

ReactDOM.render(<App />, document.getElementById('root'));
