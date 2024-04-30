import {Project} from './project';
import {Degree} from './degree';
import {HistoryRecord} from './history-record';
import {Training} from './training';

export interface DataType {
    heading?: string,
    greeting?: string,
    description?: string,
    personalInfo?: {
        phone: string,
        address: string
    },
    contact?: {
        name: string,
        icon: string,
        title: string,
        internalPage?: boolean,
        link: string,
        showInContact?: boolean,
        alternativeIcon?: [string, string]
    }[],
    skills?: {
        name: string,
        type: 'frontend' | 'backend' | 'database' | 'devops' | 'other'
        logo: string,
        storedLocallyLogo?: boolean,
    }[],
    projects?: Project[],
    education?: Degree[],
    workExperience?: HistoryRecord[],
    volunteering?: HistoryRecord[],
    training?: Training[],
    contactIntro?: string
}
