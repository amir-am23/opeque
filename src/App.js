import React from 'react'
import './App.css';
import Navbar from './components/Nabbar/Navbar'
import Carouseels from './components/Carousel/Carousel'
import Layout from './hoc/layout/layout'
import moduleName from './pages/index'
import Index from './pages/index';

function App() {
  return (
    <>
      <Layout>
        <Index/>
      </Layout>
    </>
  )
}

export default App;
