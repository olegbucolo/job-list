import type { Job } from '../../types/job';
import './JobItem.css';

interface JobItemProps {
    job: Job;
    onJobApply: (id: number) => void;
}

export function JobItem({ job, onJobApply }: JobItemProps) {
    return (
        <li className="li-card">
            <a href="">
                <div className="info">
                    <h1 className="job-title-type">{`${job.title}, ${job.type}`}</h1>
                    <a className="job-company" href="" >
                        {job.company}
                    </a>
                    <p className="job-location">{job.location}</p>
                </div>
            </a>
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