import { useState, useEffect, useContext, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { pages } from './variables';
import styled from 'styled-components';

const Window = styled.div`
  width: 100vw;
  max-width: 100vw;
`;

function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
          {pages.map((name, index) => {
            const Component = lazy(() =>
              import(
                `./pages/${name.charAt(0).toUpperCase() + name.slice(1)}.jsx`
              )
            );
            return (
              <Route
                key={index}
                path={`/${name === 'home' ? '' : name}`}
                element={<Component />}
              />
            );
          })}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
