import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './page/Home/Home';
import Header from './compnents/Header/Header';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;