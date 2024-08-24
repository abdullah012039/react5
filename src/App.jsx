import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavHeader from './NavHeader';
import Home from './Home';
import Projects from './Projects';
import ProjectDetails from './ProjectDetails';
import NotFound from './NotFound';

const App = () => {
  return (
    <Router>
      <NavHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
