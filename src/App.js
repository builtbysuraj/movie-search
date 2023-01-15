import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Search from './components/Search'

const App = () => {
  return (
    <BrowserRouter>
      <Search />
    </BrowserRouter>
  )
}

export default App