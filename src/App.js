import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Home from './components/layout/Home'
import Footer from './components/layout/Footer'
import Local from './components/pages/Local'
import Presentes from './components/pages/Presentes/Presentes'
import Recados from './components/pages/Recados'
import SobreNós from './components/pages/Sobre Nós'
import Testemunhas from './components/pages/Testemunhas'
import Produtos from './components/pages/Presentes/Produtos'

function App() {
  return (
    <Router>
      <Header />
      <Routes> 
        <Route element={<Home />} exact path="/">
        </Route>
      </Routes>
      <Routes>
        <Route element={<Local />} exact path="/local">
        </Route>
      </Routes>
      <Routes>
        <Route element={<Presentes />} exact path="/presentes">
        </Route>
      </Routes>
      <Routes>
        <Route element={<Recados />} exact path="/recados">
        </Route>
      </Routes>
      <Routes>
        <Route element={<SobreNós />} exact path="/sobre nós">
        </Route>
      </Routes>
      <Routes>
        <Route element={<Testemunhas />} exact path="/testemunhas">
        </Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
