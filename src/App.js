import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Search from './components/Search'
import DetailsCard from './components/DetailsCard'

const App = () => {
  return (
    <BrowserRouter>
      <Search />
      <Routes>
        <Route path='/:id' element={<DetailsCard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App