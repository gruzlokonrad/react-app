import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Favorite from './components/Favorite/Favorite'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'
import './styles/normalize.scss';
import './styles/global.scss';

const App = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};

export default App;