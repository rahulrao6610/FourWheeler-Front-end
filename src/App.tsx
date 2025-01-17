import Home from './rahul-components/Home'
import Login from './rahul-components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
export default function App() {
  return (
    <div>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/Home' element={<Home/>}/>
   </Routes>
   </BrowserRouter>
   </div>
  )
}
