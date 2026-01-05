import type { Job } from '../../types/job';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './JobDetailsPage.css';

interface JobDetailsPageProps {
    jobs: Job[];
}

export function JobDetailsPage({ jobs }: JobDetailsPageProps) {
    const { id } = useParams<{ id: string }>();
    const job = jobs.find(j => j.id === Number(id));
    if (!job) return <p>Job not found</p>;
    return (
        <section className="section-job-details">
            <header className="header-job-details">
                <h1 className="job-title">Hiring {job.type} {job.title}</h1>
                <h3 className="job-location">{job.salary}</h3>

                <NavLink>
                    <h2 className="job-company">{job.company}</h2>
                </NavLink>
                <h3 className="job-location">{job.location}</h3>
            </header>
            <ul className="ul-job-details">
                <li>
                    <p className="job-desc">{job.description}</p>
                </li>
                <li>
                    {job.requirements.map((r) => {
                        return <p className="job-requirement">
                            {r}
                        </p>
                    })}
                </li>
                <li>
                    {job.responsibilities.map((r) => {
                        return <p className="job-responsibility">{r}</p>
                    })}
                </li>
            </ul>
        </section>
    )
}