import './App.css';
import Movie from "./page/Movie/Movie"
import {BrowserRouter, Route, Routes} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Movie/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
