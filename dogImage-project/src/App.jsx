import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dash from './pages/Dash';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dash" element={<Dash />} />
            </Routes>
        </Router>
    );
}

export default App;
