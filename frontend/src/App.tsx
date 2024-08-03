import Navbar from "./components/navbar/navbar";
import Homepage from './pages/homepage';
import About from './pages/about/about';
import Products from './pages/products';
import Contacts from './pages/contacts';

function App() {

  return (
    <>
      <Navbar />
      <Homepage />
      <About />
      <Products />
      {/* <Contacts /> */}
    </>
  )
}
export default App
