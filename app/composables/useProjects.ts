import { projectRepository } from '~/infrastructure/data/projects.data'
import { GetProjectsUseCase } from '~/usecases/get-projects.usecase'
import type { Project } from '~/domain/project'

const LIMIT = 3

export const useProjects = () => {
  const projects = ref<Project[]>([])
  const cursor = ref(0)
  const total = ref(0)

  const useCase = new GetProjectsUseCase(projectRepository)

  const loadMore = () => {
    const result = useCase.execute(cursor.value, LIMIT)
    projects.value.push(...result.projects)
    cursor.value = result.nextCursor ?? cursor.value + result.projects.length
    total.value = result.total
  }

  const hasMore = computed(() => projects.value.length < total.value)

  onMounted(() => {
    if (projects.value.length === 0) {
      loadMore()
    }
  })

  return {
    projects,
    loadMore,
    hasMore,
  }
}
