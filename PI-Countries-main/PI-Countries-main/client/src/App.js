import './App.css';
import Home from '../src/components/Home/Home';
import Nav from '../src/components/Nav/Nav';
import {Route, Routes} from "react-router-dom"
import About from './components/About/About';
import Detail from "../src/components/Detail/Detail"
import Form from "./components/Form/Form"

function App() {
  return (
    <div className="App">
        <Nav/>
      <Routes>    
       <Route path='/' element={<Home/>} />
       <Route path='/about' element={<About/>} />
       <Route path='/detail/:name' element={<Detail/>}/>
       <Route path='/form' element={<Form/>}/>
     </Routes>

    </div>
  );
}
export default App;
