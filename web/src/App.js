import Navbar from "./components/miscellaneous/navbar";
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/miscellaneous/footer";
import Cv from "./components/cv/cv";

function App() {
  return (
    <>
      <main className='flex-shrink-0'>
        <Navbar />
        <Routes>
          <Route path='/cv' element={<Cv />} />
        </Routes>
        <a
          href="https://wa.me/0034630486152"
          class="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-whatsapp whatsapp-icon"></i>
        </a>
      </main>
      <Footer />
    </>
  );
}

export default App;
