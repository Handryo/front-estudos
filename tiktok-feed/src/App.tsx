import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedPage from './pages/Feed'; // Corrija o caminho conforme sua estrutura de pastas

function App() {
    return (
        <Router>
            <Routes>
                {/* Defina a rota para o FeedPage */}
                <Route path="/feed" element={<FeedPage />} />
            </Routes>
        </Router>
    );
}

export default App;
