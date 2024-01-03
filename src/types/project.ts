export interface Project {
    id: string,
    name: string,
    hide: boolean,
    description: string,
    imageName: string,
    type: 'freelance' | 'school' | 'personal',
    projectLink?: string,
    githubLink?: string,
    role?: string,
    videoPath?: string,
    skills: {
        name: string,
        logo: string
    }[],
    images: {
        title: string,
        imageName: string
    }[],
    details?: {
        description: string[],
    }
}
