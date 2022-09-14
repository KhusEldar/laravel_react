require('./bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Index } from './'
import '../css/app.css'

 function Example() {

     return (
        <React.StrictMode>
            <BrowserRouter>
                <Index/>
            </BrowserRouter>
        </React.StrictMode>
     );
 }

 export default Example;

 if (document.getElementById('app')) {
     ReactDOM.render(<Example />, document.getElementById('app'));
 }

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// require('./components/Example');

