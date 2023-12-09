import Header from './components/Header'
import './css/App.css'
import AllListings from './page components/AllListings'
import Home from './page components/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/all-listings" element={<AllListings/>}/>
      </Routes>
    </>
  )
}

export default App
