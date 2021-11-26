import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <BrowserRouter>
    <div>
        <Routes>
          <Route exact path='/' element={<Landing/>}/>
          <Route exact path='/home' element={<Home/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;