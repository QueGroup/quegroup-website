import React from 'react';
import {BrowserRouter, Routes ,Route} from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import Main from './components/main/Main';
import MainLayout from './components/layouts/MainLayout';
import Politics from './components/politics/Politics';

function App() {
  return (
      <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path='/' element={<MainLayout/>}>
                        <Route index element={<Main/>}></Route>
                        <Route path='politics' element={<Politics></Politics>}></Route>
                    </Route>
                </Routes>
            </div>
      </BrowserRouter>
  );
}

export default App;
