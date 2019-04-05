import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<span>

    <div>
<pageTitle></pageTitle>

    </div>

    <div>
        <ReviewComponent>samsunt note</ReviewComponent>
       < ReviewComponent>redmdi note</ReviewComponent>
    </div>

<mainCompnent></mainCompnent> </span> ,

document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
