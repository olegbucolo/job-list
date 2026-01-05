import type {Job} from '../../types/job';

interface JobItemProps{
    job: Job
}

export function JobItem({job}: JobItemProps) {
    return (
        <div>{job.title}</div>
    )
}