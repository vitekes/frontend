import cyclesService from 'src/services/cycles.service'
import Cycle from './Cycle'

const page = async () => {
  const data = await cyclesService.getAll()
  return (
    <div>
      {data.length === 0 ? (
        <h1>Циклов пока нет</h1>
      ) : (
        data.map(cycle => <Cycle cycle={cycle} key={cycle.id} />)
      )}
    </div>
  )
}
export default page
