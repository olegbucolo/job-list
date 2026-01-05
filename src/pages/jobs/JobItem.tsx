import type { Job } from '../../types/job';
import {NavLink} from 'react-router-dom';
import './JobItem.css';

interface JobItemProps {
    job: Job;
    onJobApply: (id: number) => void;
}

export function JobItem({ job, onJobApply }: JobItemProps) {
    return (
        <li className="li-card">
            <NavLink to={`/job-details/${job.id}`}>
                <div className="info">
                    <h1 className="job-title-type">{`${job.title}, ${job.type}`}</h1>
                    <div className="job-company" >
                        {job.company}
                    </div>
                    <p className="job-location">{job.location}</p>
                </div>
            </NavLink>
            <div className="action">
                <button
                    className="btn-apply"
                    onClick={() => onJobApply(job.id)}>
                    {job.applied ? 'Delist application' : 'Apply'}
                </button>
            </div>
        </li>
    )
}