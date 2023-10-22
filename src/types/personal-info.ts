import {Project} from './project';
import {Degree} from './degree';
import {HistoryRecord} from './history-record';
import {Training} from './training';

export interface DataType {
    heading?: string,
    greeting?: string,
    description?: string,
    contact?: {
        name: string,
        icon: string,
        title: string,
        internalPage?: boolean,
        link: string
    }[],
    skills?: {
        name: string,
        type: 'frontend' | 'backend' | 'database' | 'devops' | 'other'
        logo: string,
        storedLocallyLogo?: boolean,
    }[],
    projects?: Project[],
    education?: Degree[],
    experience?: HistoryRecord[],
    training?: Training[]
}
