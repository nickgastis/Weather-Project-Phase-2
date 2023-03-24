import Header from './Components/Header';
import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from './Components/Home';
import SaveList from './Components/SaveList';
import Search from './Components/Search';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/saveList'} element={<SaveList />} />
        <Route path={'/search'} element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
