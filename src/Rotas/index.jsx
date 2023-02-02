import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../componentes/Home';
import Sabores from '../componentes/Sabores';
import Sobre from '../componentes/Sobre';

export default function Rotas() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/sabores' element={<Sabores />}/>
        <Route path='/sobre' element={<Sobre />}/>
      </Routes>
    </BrowserRouter>
  )
}