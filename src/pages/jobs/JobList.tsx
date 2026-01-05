import type { Job } from '../../types/job'
import { JobItem } from './JobItem';

interface JobListProps {
    jobs: Job[];
    onJobApply: (id: number) => void;
}

export function JobList({ jobs, onJobApply }: JobListProps) {

    return (
        <ul className="ul-cards">
            {jobs.map((job) => {
                return (
                    <JobItem
                        key={job.id}
                        onJobApply={onJobApply}
                        job={job} />
                )
            })}
        </ul>
    )
}