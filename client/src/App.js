import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Navbar from "./components/navbar/Navbar";
import SearchItem from "./components/searchItem/SearchItem";
import PropertyList from "./components/propertyList/PropertyList";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/Navbar/:id" element={<Navbar/>}/>
        <Route path="/SearchItem/:id" element={<SearchItem/>}/>
        <Route path="/PropertyList/:id" element={<PropertyList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
