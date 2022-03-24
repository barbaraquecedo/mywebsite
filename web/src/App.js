import Navbar from "./components/miscellaneous/navbar";
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/miscellaneous/footer";

function App() {
  return (
    <>
      <main className='flex-shrink-0'>
        <Navbar/>
        <Routes>
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
