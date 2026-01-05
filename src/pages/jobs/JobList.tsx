import type { Job } from '../../types/job'
import { JobItem } from './JobItem';

interface JobListProps {
    jobs: Job[];
}

export function JobList({ jobs }: JobListProps) {

    return (
        jobs.map((job) => {
            return (
                <JobItem
                    key={job.id}
                    job={job} />
            )
        })

    )
}