import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <Router>
                    <Routes>
                        <Route path="/" element={<WelcomePage />} />
                    </Routes>
                </Router>
            </header>
        </div>
    );
}

export default App;
