import Register from './Register';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <main className="App">
        <Router>
          <Routes>
            <Route path='/' exact={true} element={<Login />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </Router>  
    </main>
  );
}

export default App;