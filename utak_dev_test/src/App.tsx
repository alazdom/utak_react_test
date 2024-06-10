import { Routes, Route } from "react-router-dom"
import NotFound from "./components/NotFound";
import Create from "./components/Create";
import Item from "./components/products/Item";

function App() {

  return (
    <Routes>
    <Route path="/" element={<Item/>}></Route>
    <Route path="*" element={<NotFound/>}></Route>
    <Route path="/create" element={<Create />}></Route>
   </Routes>
  )
}

export default App;
