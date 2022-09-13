
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
 require('./bootstrap');

 import axios, { AxiosError } from 'axios';
 import React, { useEffect } from 'react';
 import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Index } from './'
import { First, Login } from './Pages';

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

