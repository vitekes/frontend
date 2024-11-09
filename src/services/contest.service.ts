import type { IContest } from 'src/types/contest.types'
import { Service } from './types'

class ContestService extends Service<IContest> {
  constructor() {
    super('/contests')
  }
}

export default new ContestService()
