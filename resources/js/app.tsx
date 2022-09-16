require('./bootstrap');

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../css/app.css'
import { Layout } from './Components';
import 'antd/dist/antd.min.css'
import { AdminPanel, Login, Register } from './Pages';
import { axiosApi } from './Service';

 function Example() {

     return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/register' element={<Register/>}/>
                  <Route path='/' element={
                    <Layout>
                      <Routes>
                        <Route path='/admin' element={<AdminPanel/> }/>
                      </Routes>
                    </Layout>
                  } />
                </Routes>
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

