export interface Project {
    id: string,
    name: string,
    description: string,
    imageName: string,
    skills: {
        name: string,
        logo: string
    }[],
    images: {
        title: string,
        imageName: string
    }[]
}
