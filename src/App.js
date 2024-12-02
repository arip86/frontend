import Home from './pages/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CreateMovie from './pages/movie/Create';
import NowPlaying from './pages/movie/NowPlaying';
import Layout from './layout/Index';
import Popular from './pages/movie/Popular';

function App() {
  return (
   <div>
    <Layout>
    <Routes>
    <Route path='/' element= {<Home/>}></Route>
    <Route path='/movie/create' element={<CreateMovie/>}></Route>
    <Route path='/movie/now' element={<NowPlaying/>}></Route>
    <Route path='/movie/popular' element={<Popular />}></Route>
    </Routes>
    </Layout>
   </div>
  );
}

export default App;
