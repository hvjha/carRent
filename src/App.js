import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarList from './Component/Carlist';

function App() {
  return (



    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CarList/>}>
        <Route exact path="/page/:page" element={CarList} />
       
      </Route>
    </Routes>
  </BrowserRouter>
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/page/:page" component={CarList} />
    //       <Route path="/" component={CarList} />
    //     </Routes>

    //     <h1>hello</h1>
    //   </div>
    // </Router>
  );
}

export default App;

