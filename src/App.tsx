import './App.css'
import { HomePage } from './home/HomePage'
import { AboutPage } from './about/AboutPage'
import { JobsPage } from './jobs/JobsPage'
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={"jobs"} element={<JobsPage />} />
        <Route path={"about"} element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App
