import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import UserProfile from './pages/UserProfile'

function App(): JSX.Element {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  return (
    <BrowserRouter>
      <div className="dashboard-shell" data-theme={theme}>
        <Navbar activeTheme={theme} onThemeChange={setTheme} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
