import type { Project } from '~/domain/project'

export interface ProjectRepository {
  getAll(): Project[]
  getTotal(): number
  getPaginated(cursor: number, limit: number): Project[]
}
