import surveysService from 'src/services/surveys.service'

const page = async () => {
  const data = await surveysService.getAll()
  return <div></div>
}
export default page
