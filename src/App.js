

/*import Home from "./pages/Home";

function App() {
  return (
    <Home />
  );
}

export default App;*/

//import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { routePath } from './constants/routes';

// components
//import {Home} from './pages';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={routePath.home} element={<Home />} />
          
          {/* <Route path={`${routePath.movies}/:type`} element={<Movies />} /> */}
          {/* <Route path={`${routePath.movie}/:id`} element={<Movie />} /> */}
          <Route path={routePath.invalid} element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;