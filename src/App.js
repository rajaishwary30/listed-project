import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element = {<Login/>} path = '/'></Route>
        <Route element = {<Dashboard/>} path = '/dashboard'></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
