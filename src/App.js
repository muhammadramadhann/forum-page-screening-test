import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Content from './components/Content';

function App() {
    return (
        <Router>
            <Navbar />
            <Content />
        </Router>
    );
}

export default App;
