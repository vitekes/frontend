import { Service } from './types'

interface IPodcast {}

class PodcastService extends Service<IPodcast> {
  constructor() {
    super('/podcasts')
  }
}

export default new PodcastService()
