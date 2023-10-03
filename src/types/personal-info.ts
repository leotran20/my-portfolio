export interface DataType {
    heading?: string,
    description?: string,
    skills?: {
        name: string,
        type: 'frontend' | 'backend' | 'database' | 'devops' | 'other'
        logo: string
    }[]
}
