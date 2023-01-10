import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './page/Home/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
        <Router>
          
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;