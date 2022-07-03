import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './components/header/Header'
import { SubHeader } from './components/subHeader/SubHeader'
import { Students } from './pages/Students'
import './App.scss'
import './styles/resultsColor.scss'

export const App = () => {
  return (
    <div className='app'>
      <div className='wrap'>
        <Header/>
        <SubHeader/>
        <div className='pageContainer'>
        <Routes>
              <Route exact path="/students" element={<Students/>}/>
              <Route path="*" element={ <Navigate to='/students'/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}