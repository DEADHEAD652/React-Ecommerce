import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Cart from "./Pages/cart/Cart";
import Shope from "./Pages/shop/Shope";
function App() {
  return (
<Router>
  <Navbar/>
<Routes>
  <Route path="/"  element={<Shope/>} />
  <Route path="/cart" element={<Cart/>}/>

</Routes>
</Router>)
}

export default App;
