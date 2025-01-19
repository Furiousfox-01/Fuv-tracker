import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div className="app">
         
          <Header  />

          
          <main className="main-content" style={{ paddingBottom: '50px' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

      
          <div >
          <Footer  />
          </div>
        </div>
      </Router>

    </>
  )
}

export default App
