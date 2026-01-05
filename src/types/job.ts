export interface Job {
    applied: boolean;
    id: number;
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    description: string;
    responsibilities: string[];
    requirements: string[]
}