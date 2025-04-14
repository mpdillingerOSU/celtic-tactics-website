import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import WelcomePage from './pages/WelcomePage';

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <NavigationBar />
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
