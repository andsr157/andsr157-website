import { BuildContactMailtoUseCase, ContactValidationError } from '~/usecases/build-contact-mailto.usecase'
import type { ContactMessage } from '~/domain/project'

export const useContactForm = () => {
  const form = reactive<ContactMessage>({
    name: '',
    email: '',
    interests: [],
    question: '',
  })

  const error = ref<string | null>(null)
  const useCase = new BuildContactMailtoUseCase()

  const toggleInterest = (interest: string) => {
    const index = form.interests.indexOf(interest)
    if (index === -1) {
      form.interests.push(interest)
    } else {
      form.interests.splice(index, 1)
    }
  }

  const sendMessage = () => {
    try {
      error.value = null
      const url = useCase.execute(form)
      window.open(url, '_blank')
    } catch (err) {
      if (err instanceof ContactValidationError) {
        error.value = err.message
      } else {
        error.value = 'Failed to open mail client'
      }
    }
  }

  return {
    form,
    error,
    toggleInterest,
    sendMessage,
  }
}
