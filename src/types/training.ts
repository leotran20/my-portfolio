export interface Training {
    id: string,
    name: string,
    provider: string,
    description: string,
    issuedDate: string,
    certificate: string,
    technologies?: {
        name: string,
        logo: string,
    }[]
}
