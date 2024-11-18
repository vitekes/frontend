import { ALL_ITEMS } from 'src/constants/constants'
import albumService from 'src/services/album.service'
import contestService from 'src/services/contest.service'
import postService from 'src/services/post.service'
import questService from 'src/services/quest.service'
import testService from 'src/services/test.service'

type TNamespaces = 'contests' | 'tests' | 'albums' | 'quests' | 'posts'
type DataType = { type: TNamespaces; service: any }
const dataTypes: DataType[] = [
  {
    type: 'tests',
    service: testService,
  },
  {
    type: 'contests',
    service: contestService,
  },
  {
    type: 'posts',
    service: postService,
  },
  {
    type: 'albums',
    service: albumService,
  },
  {
    type: 'quests',
    service: questService,
  },
]

export class SitemapFetchData {
  private readonly fetchData = async ({ service, type }: DataType) => ({
    [type]: (await service.getAll(ALL_ITEMS)).array,
  })

  public readonly getData = async () => {
    const array = dataTypes.map(async d => await this.fetchData(d))
    return array.reduce((acc, obj) => {
      return { ...acc, ...obj }
    }, {})
  }
}
export const sitemapFetchData = new SitemapFetchData()
