import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import CommitHistory from './routes/CommitHistory'
import Features from './routes/Features'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/CommitHistory' element={<CommitHistory />} />
        <Route path='/Features' element={<Features />} />
      </Routes>
    </Router>
  )
}

export default App
