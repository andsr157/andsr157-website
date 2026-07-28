import type { Project } from '~/domain/project'
import type { ProjectRepository } from '~/repositories/project.repository'

const PROJECTS: Project[] = [
  {
    name: 'Blog',
    year: '2025',
    imageUrl: '/projects/img21.png',
    projectUrl: 'https://ressurect.manesaraditya.com/',
  },
  {
    name: 'Pijar Cargo',
    year: '2025',
    imageUrl: '/projects/img18.png',
    projectUrl: 'https://pijargroup.com/',
  },
  {
    name: 'Undangan Online',
    year: '2025',
    imageUrl: '/projects/img20.png',
    projectUrl: 'https://niken-dwi.vercel.app/',
  },
  {
    name: 'barongsolo',
    year: '2024',
    imageUrl: '/projects/img4.png',
    projectUrl: 'https://www.barongsolo.com',
  },
  {
    name: 'Morpheme Commerce',
    year: '2023',
    imageUrl: '/projects/img3.png',
    projectUrl: 'https://morpheme-commerce-uxnnkzi44q-et.a.run.app/',
  },
  {
    name: 'Point Of Sales',
    year: '2022',
    imageUrl: '/projects/img2.png',
    projectUrl: 'https://pos.jowwo.xyz',
  },
  {
    name: 'Kreafund',
    year: '2023',
    imageUrl: '/projects/img1.png',
    projectUrl: 'https://kreafund.jowwo.xyz',
  },
]

export class InMemoryProjectRepository implements ProjectRepository {
  getAll(): Project[] {
    return PROJECTS
  }

  getTotal(): number {
    return PROJECTS.length
  }

  getPaginated(cursor: number, limit: number): Project[] {
    return PROJECTS.slice(cursor, cursor + limit)
  }
}

export const projectRepository: ProjectRepository = new InMemoryProjectRepository()
