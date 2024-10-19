'use client'
import { useContests } from 'src/hooks/useContests'
import type { IContest } from 'src/types/contest.types'
import type { IResponse } from 'src/types/global.types'
import { Contest } from './Contest'
import './Contests.sass'
export function Contests({ initData }: { initData: IResponse<IContest> }) {
  const { data } = useContests(initData)

  return (
    <div className='contests'>
      {data.results.map(contest => (
        <Contest key={contest.id} data={contest} />
      ))}
    </div>
  )
}
