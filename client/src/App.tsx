import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import SignUp from './views/SignUp'

import { Toast } from './components/Toast'
import Chats from './views/Chats'

import { QueryClient, QueryClientProvider } from 'react-query'

function App() {

  const queryClient = new QueryClient()

  return ( 
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' Component={ Home } />
        <Route path='/login' Component={ Login } />
        <Route path='/signup' Component={ SignUp } />
        <Route path='/chats' Component={ Chats } />
      </Routes>
      <Toast/>
    </QueryClientProvider>
  )
}

export default App
