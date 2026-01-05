import { JobList } from './JobList';
import type { Job } from '../../types/job'

interface JobsPageProps {
    jobs: Job[];
    onJobApply: (id: number) => void;
}

export function JobsPage({ jobs, onJobApply }: JobsPageProps) {

    return (
        <section>
            {/* search thing? */}
            {/* filters thing*/}
            {/* job lists */}
            <JobList jobs={jobs} onJobApply={onJobApply} />

        </section>
    )
}