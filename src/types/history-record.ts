export interface HistoryRecord {
    id: string,
    name: string,
    location: string,
    logo: string,
    position: string,
    startDate: string,
    endDate: string,
    description: string,
    technologies?: {
        name: string,
        logo: string,
    }[]
}
