import { BrowserRouter, Routes, Route } from 'react-router-dom/client'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import UserProfile from './pages/UserProfile'

function App(): JSX.Element {
  const [theme, setTheme] = useState('light')

  return (
    <div className="dashboard-shell">
      <Navbar activeTheme={theme} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
