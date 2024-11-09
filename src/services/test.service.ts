import type { ITest } from 'src/types/test.types'
import { Service } from './types'

class TestService extends Service<ITest> {
  constructor() {
    super('/tests')
  }
}

export default new TestService()
