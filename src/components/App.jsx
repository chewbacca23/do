import {NavLink, Routes, Route, Navigate} from 'react-router-dom';
import DogData from "./DogData.jsx";



import '../main.scss';
import data from './data.js';


function App() {

function NotFound(){
  return (
    <div>
      <h1>404 Not Found</h1>
      <Navigate to="dogs/" />
    </div>
  );
}

const dataObject = data
console.log(dataObject)

function Dogs() {
  return (
    
    <nav>
      {dataObject.map((item) => <NavLink to={item.name}><img src={item.img}></img><p>{item.name}</p></NavLink>)}
    </nav>
  )
}


  return (
 <div className="App">
   
   <Dogs/>
    <Routes> 
      <Route path="dogData"  />
      <Route index element={<div />} />
       <Route path=':dogName' element= {<DogData/>} />
    <Route path="*" element={<NotFound />} /> 
    </Routes>
  </div>
  );
}




export default App;