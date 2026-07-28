import type { ProjectRepository } from '~/repositories/project.repository'
import type { PaginatedProjects } from '~/domain/project'

export class GetProjectsUseCase {
  constructor(private readonly repository: ProjectRepository) {}

  execute(cursor: number, limit: number): PaginatedProjects {
    const projects = this.repository.getPaginated(cursor, limit)
    const total = this.repository.getTotal()
    const nextCursor = cursor + projects.length < total ? cursor + projects.length : null

    return {
      projects,
      nextCursor,
      total,
    }
  }
}
