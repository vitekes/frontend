import type { IGlobalLines } from 'src/types/global.types'
import { Service } from './types'

class SurveysService extends Service<IGlobalLines> {
  constructor() {
    super('/surveys')
  }
}

export default new SurveysService()
