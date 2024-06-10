import { Routes, Route } from "react-router-dom"
import NotFound from "./components/NotFound";
import Create from "./components/create/Create";
import Item from "./components/products/Item";
import Details from "./components/details/Details";

function App() {

  return (
    <Routes>
    <Route path="/" element={<Item/>}></Route>
    <Route path="/items/:id" element={<Details/>}></Route>
    <Route path="/create" element={<Create />}></Route>
    <Route path="*" element={<NotFound/>}></Route>
   </Routes>
  )
}

export default App;
