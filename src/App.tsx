import './App.css'
import { HomePage } from './pages/home/HomePage'
import { AboutPage } from './pages/about/AboutPage'
import { JobsPage } from './pages/jobs/JobsPage'
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { JobDetailsPage } from './pages/jobs/JobDetailsPage';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={"jobs"} element={<JobsPage />} />
        <Route path={"about"} element={<AboutPage />} />
        <Route path={"job-details/:id"} element={<JobDetailsPage/>}/>
      </Routes>
    </>
  )
}

export default App
