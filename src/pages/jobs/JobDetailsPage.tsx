import type { Job } from '../../types/job';
// import { useParams } from 'react-router-dom';

interface JobDetailsPageProps {
    jobs: Job[];
}

export function JobDetailsPage({ jobs }: JobDetailsPageProps) {
    const job = jobs.find(j => j.id === 1);
      if (!job) return <p>Job not found</p>;
    return (
        <>
            <div>{job.title}</div>
            <div>{job.description}</div>
            <div>{job.requirements}</div>
            <div>{job.title}</div>
        </>
    )
}