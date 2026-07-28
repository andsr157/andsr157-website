export interface Project {
  name: string
  year: string
  imageUrl: string
  projectUrl: string
}

export interface ContactMessage {
  name: string
  email: string
  interests: string[]
  question: string
}

export interface PaginatedProjects {
  projects: Project[]
  nextCursor: number | null
  total: number
}
