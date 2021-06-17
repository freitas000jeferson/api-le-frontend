import { Service } from '../service'

export const users = new class extends Service {
  constructor() {
    super('users')
  }
}