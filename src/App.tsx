import './App.css'
import { HomePage } from './pages/home/HomePage'
import { AboutPage } from './pages/about/AboutPage'
import { JobsPage } from './pages/jobs/JobsPage'
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
