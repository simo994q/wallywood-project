import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { MainLayout } from './layout/MainLayout/MainLayout'
import { HomePage } from './components/HomePage/HomePage'
import { PostersPage } from './components/PostersPage/PostersPage'
import { DetailsPage } from './components/DetailsPage/DetailsPage'
import { GenrePage } from './components/GenrePage/GenrePage'
import { AboutPage } from './components/AboutPage/AboutPage'
import { ContactPage } from './components/ContactPage/ContactPage'
import { LoginPage } from './components/LoginPage/LoginPage'

import { CartContextProvider } from './context/CartContext'

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path='poster' element={<PostersPage />} />
              <Route path='poster/:id' element={<DetailsPage />} />
              <Route path='poster/list/:genre' element={<GenrePage />} />
              <Route path='about' element={<AboutPage />} />
              <Route path='contact' element={<ContactPage />} />
              <Route path='login' element={<LoginPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App
