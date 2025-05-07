import React from 'react';
import './App.css';
import ExperimentFlow from './ExperimentFlow';
import Header from './Header';
import Footer from './Footer';

const App: React.FC = () => (
  <div>
    <Header />
    <main style={{ padding: '2rem', minHeight: '80vh' }}>
      <ExperimentFlow />
    </main>
    <Footer />
  </div>
);

export default App;
