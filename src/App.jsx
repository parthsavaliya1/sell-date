import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './Layout/Routes';
import MainComponent from './MainComponent';
import './App.css'
import Header from './components/Header';
import TopBar from './components/TopBar';

function App() {
    return (
        <>
            <MainComponent />
            <TopBar/>
            <Router>
            <Header/>
                <AppRoutes />
            </Router>
        </>

    );
}

export default App;
