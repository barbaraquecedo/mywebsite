import Navbar from "./components/miscellaneous/navbar";
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/miscellaneous/footer";
import Cv from "./components/cv/cv";
import Home from "./components/home/home";

function App() {
  return (
    <>
      <main className='flex-shrink-0'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cv' element={<Cv />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
