import type { ContactMessage } from '~/domain/project'

export class ContactValidationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ContactValidationError'
  }
}

export class BuildContactMailtoUseCase {
  execute(message: ContactMessage): string {
    if (!message.name.trim()) {
      throw new ContactValidationError('Name is required')
    }
    if (!message.email.trim()) {
      throw new ContactValidationError('Email is required')
    }
    if (!message.question.trim()) {
      throw new ContactValidationError('Message is required')
    }

    const subject = encodeURIComponent(`Contact from ${message.name}`)
    const body = encodeURIComponent(
      `Name: ${message.name}\n` +
        `Email: ${message.email}\n` +
        `Interested in: ${message.interests.join(', ')}\n\n` +
        `Message:\n${message.question}`,
    )

    return `mailto:andikasatrio159@gmail.com?subject=${subject}&body=${body}`
  }
}
