import React from 'react';
import {BrowserRouter, Routes ,Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Main from './components/main/Main';
import MainLayout from './components/layouts/MainLayout';

function App() {
  return (
      <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path='/' element={<MainLayout/>}>
                        <Route index element={<Main/>}></Route>
                    </Route>
                </Routes>
            </div>
      </BrowserRouter>
  );
}

export default App;
