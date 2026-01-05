import type { Job } from '../../types/job';
import './JobItem.css';

interface JobItemProps {
    job: Job
}

export function JobItem({ job }: JobItemProps) {
    return (
        <li className="li-card">
            <a href="">
                <div className="info">
                    <h1 className="job-title-type">{`${job.title}, ${job.type}`}</h1>
                    <h2 className="job-company">{job.company}</h2>
                    <p className="job-location">{job.location}</p>
                </div>
            </a>
            <div className="action">
                <button className="btn-apply">APPLY</button>
            </div>
        </li>
    )
}