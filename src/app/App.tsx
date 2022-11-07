import React from 'react';
import './App.css';
import {Header} from "../components/header/Header";
import {Footer} from "../components/footer/Footer";
import {RoutesPage} from "./routes/Routes";

function App() {
    return (
        <div className='App'>
            <Header/>
            <RoutesPage/>
            <Footer/>
        </div>
    );
}

export default App;
