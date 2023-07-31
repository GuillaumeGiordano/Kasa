import { Route, Routes } from 'react-router-dom'
// ROOT
import RootLayout from '../../layouts/RootLayout'
// PAGES
import Home from '../../pages/Home'
import FicheLogement from '../../pages/FicheLogement'
import APropos from '../../pages/APropos'
import Error from '../../pages/Error'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/FicheLogement/:indexlogement" element={<FicheLogement />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  )
}