import type { Job } from '../../types/job';
import { NavLink } from 'react-router-dom';
import './JobItem.css';

interface JobItemProps {
    job: Job;
    onJobApply: (id: number) => void;
}

export function JobItem({ job, onJobApply }: JobItemProps) {
    return (
        <li className="li-card">
            <div className="info">
                <NavLink to={`/job-details/${job.id}`}>
                    <h1 className="job-title-type">{`${job.title}, ${job.type}`}</h1>
                </NavLink>
                <NavLink className="job-company" >
                    {job.company}
                </NavLink>
                <p className="job-location">{job.location}</p>
            </div>
            <div className="action">
                <button
                    className="btn-apply"
                    onClick={() => onJobApply(job.id)}>
                    {job.applied ? 'Cancel application' : 'Send CV'}
                </button>
            </div>
        </li>
    )
}