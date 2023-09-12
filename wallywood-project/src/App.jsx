import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { MainLayout } from './layout/MainLayout/MainLayout'
import { HomePage } from './components/HomePage/HomePage'
import { PostersPage } from './components/PostersPage/PostersPage'
import { DetailsPage } from './components/DetailsPage/DetailsPage'
import { AboutPage } from './components/AboutPage/AboutPage'
import { ContactPage } from './components/ContactPage/ContactPage'
import { LoginPage } from './components/LoginPage/LoginPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path='posters' element={<PostersPage />} />
            <Route path='posters/:id' element={<DetailsPage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='contact' element={<ContactPage />} />
            <Route path='login' element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
