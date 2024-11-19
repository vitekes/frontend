export interface ICycle {
  id: number
  title: string
  in_progress: boolean
}
// eslint-disable-next-line
export interface ICycleForm extends Omit<ICycle, 'id'> {}
