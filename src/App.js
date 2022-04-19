import './styles/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
const Home = React.lazy(() => import('./commons/components/Home'));
const Quiz = React.lazy(() => import('./commons/components/Quiz'));


function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path='/'element={<Home/>}></Route>
          <Route path='/quiz' element={<Quiz/>}></Route>
          <Route path='/finish' element={<Home/>}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
