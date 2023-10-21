export interface Project {
    id: string,
    name: string,
    description: string,
    imageName: string,
    type: 'freelance' | 'school' | 'personal',
    projectLink?: string,
    githubLink?: string,
    role?: string,
    skills: {
        name: string,
        logo: string
    }[],
    images: {
        title: string,
        imageName: string
    }[]
}
