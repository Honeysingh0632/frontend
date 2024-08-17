import { BrowserRouter as Router, Route, Routes ,Navigate} from 'react-router-dom';
import './App.css';
import Check from './Components/Check';
import Product from './Components/Product';
import Purple from './Components/Purple';
import Black from './Components/Black';
import Green from './Components/Green';
import MyComponent from './Components/Check';

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route  path="/"element={<Product/>}></Route>
      <Route  path="/purple"element={<Purple/>}></Route>
      <Route  path="/black"element={<Black/>}></Route>
      <Route  path="/green"element={<Green/>}></Route>


    </Routes>   
    </Router>
    {/* <MyComponent/> */}
   



    </>
   
    
  );
}

export default App;
