import type { FC } from 'react'
import type { ICycle } from 'src/types/cycles.types'

const Cycle: FC<{ cycle: ICycle }> = ({ cycle: { title } }) => {
  return <article>{title}</article>
}
export default Cycle
