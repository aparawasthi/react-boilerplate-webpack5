import React from 'react';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import Home from '@pages/Home/Home';
// import CryptoCoin from '@pages/CryptoCoin/CryptoCoin';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={Home} />
    //     <Route path="/home" element={Home} />
    //     {/* <Route path="/currency" component={CryptoCoin} /> */}
    //   </Routes>
    // </BrowserRouter>
    <Home/>
  );
}

export default App;