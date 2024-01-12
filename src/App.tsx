import React from "react";
import {BrowserRouter, Routes ,Route} from "react-router-dom";
import "./App.scss";
import Main from "./components/main/Main";
import MainLayout from "./components/layouts/MainLayout";
import Politics from "./components/politics/Politics";
import IsLoading from "./components/isLoading/IsLoading";
import ErrorPage from "./components/errorPage/ErrorPage";

function App() : JSX.Element {
    return (
      <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path='/' element={<MainLayout/>}>
                        <Route index element={<Main/>}></Route>
                        <Route path='politics' element={<Politics></Politics>}></Route>
                        <Route path='isloading' element={<IsLoading></IsLoading>}></Route>
                        <Route path='errorpage' element={<ErrorPage></ErrorPage>}></Route>
                    </Route>
                </Routes>
            </div>
      </BrowserRouter>
  );
}

export default App;
