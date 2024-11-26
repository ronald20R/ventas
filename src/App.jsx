//rafce 
//temas de rutas
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //npm i react-r

import Navigation from './components/Navigation'
import ListView from './views/ListView'
import CreateProductView from './views/CreateProductView';


const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>

          <Route path='/' element={<ListView />} />
          <Route path='/nuevoproducto' element={<CreateProductView />} />
          
      </Routes>
    </Router>
  )
}

export default App
