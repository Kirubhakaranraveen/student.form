import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Student from './component/Student';
import Contact from './component/Contact';
import Navbar from './Navbar';
import Data from './component/Data';

function App() {
return(
  <Data>
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path='/home' element={<Home/>}/>
     <Route path='/Student' element={<Student/>}/>
     <Route path='/Contact' element={<Contact/>}/>
     </Routes>
     </BrowserRouter>
    </div>
   </Data> 
  );
}

export default App;
