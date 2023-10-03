export interface DataType {
    heading?: string,
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
    }[]
}
