import type { IUniqSurvey } from 'src/types/survey.types'
import { Service } from './types'

class SurveysService extends Service<IUniqSurvey> {
  constructor() {
    super('/surveys')
  }
}

export default new SurveysService()
