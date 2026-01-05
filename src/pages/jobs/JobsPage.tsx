import type { Job } from '../../types/job';
import { useState, useEffect } from 'react';
import rawJobsData from '../data/jobs.json'
import { JobList } from './JobList';

export function JobsPage() {

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
        <section>
            {/* search thing? */}
            {/* filters thing*/}
            {/* job lists */}
            <JobList jobs={jobs} onJobApply={applyForJob} />

        </section>
    )
}