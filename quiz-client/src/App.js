import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Quiz from './components/Login';
import Result from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  )
}

export default App;
