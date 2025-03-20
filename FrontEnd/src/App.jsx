
import { BrowserRouter} from 'react-router-dom'
import './App.css'
import AppRoutes from './Routers/routes'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import { AuthProvider } from './context/ContextApi'

function App() {

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
      <div className='min-h-screen max-w-screen-2xl mx-auto'>
        <AppRoutes />
      </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
