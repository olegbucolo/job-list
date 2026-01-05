import './App.css'
import { HomePage } from './pages/home/HomePage'
import { AboutPage } from './pages/about/AboutPage'
import { JobsPage } from './pages/jobs/JobsPage'
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { JobDetailsPage } from './pages/jobs/JobDetailsPage';
import type { Job } from './types/job'
import { useState, useEffect } from 'react';
import rawJobsData from './pages/data/jobs.json'

function App() {



  const [jobs, setJobs] = useState<Job[]>(() => {
    const stored = localStorage.getItem('jobs');
    return stored ? (JSON.parse(stored) as Job[]) : rawJobsData as Job[]
  })

  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  })

  const applyForJob = (id: number) => {
    setJobs(prev =>
      prev.map(j =>
        j.id === id ? { ...j, applied: !j.applied } : j
      )
    )
  }


  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={"jobs"} element={<JobsPage jobs={jobs} onJobApply={applyForJob}/>} />
        <Route path={"about"} element={<AboutPage />} />
        <Route path={"job-details/:id"} element={<JobDetailsPage />} />
      </Routes>
    </>
  )
}

export default App
