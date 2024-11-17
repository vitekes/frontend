import { useQuery } from '@tanstack/react-query'
import type { FC } from 'react'
import surveysService from 'src/services/surveys.service'
import type { IOneRes } from 'src/types/global.types'
import type { IUniqSurvey } from 'src/types/survey.types'
type Props = {
  initialData: IOneRes<IUniqSurvey>
}
const Survey: FC<Props> = ({ initialData }) => {
  const {} = useQuery({
    queryKey: ['survey'],
    queryFn: () => surveysService.getOne(initialData.data.data.id),
    initialData,
  })
  return <div>Survey</div>
}
export default Survey
