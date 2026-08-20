import { Routes, Route } from 'react-router'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App