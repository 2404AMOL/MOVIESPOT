import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import TopRated from './Pages/TopRated/TopRated';
import Upcoming from './Pages/Upcoming/Upcoming';
import MovieDetails from './Pages/MovieDetils/MovieDetails';
import SearchResults from './Pages/SearchResults/SearchResults';
const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/top-rated" element={<TopRated />} />
      <Route path="/upcoming" element={<Upcoming />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/search/:query" element={<SearchResults />} />
    </Routes>
  </Router>
);

export default App;
