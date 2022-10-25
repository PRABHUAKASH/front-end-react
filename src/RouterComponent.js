
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginComponent from './LoginComponent';
import ContentComponent from './ContentComponent';
import HomeComponent from './homeComponent';

function RouterComponent(){
    return(
        <>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomeComponent/>} />
                        <Route path="/login" element={<LoginComponent/>} />
                        <Route path="/content" element={<ContentComponent />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default RouterComponent;