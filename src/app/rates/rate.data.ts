export type TRate = {
  id: number
  price: number
  title: string
  limit: number
  isPopular?: boolean
}
export const ratesData: TRate[] = [
  {
    id: 1,
    price: 1000,
    title: 'Бесплатно',
    limit: 0,
  },
  {
    id: 2,
    price: 1500,
    title: 'Тариф 1',
    limit: 5,
  },
  {
    id: 3,
    price: 2000,
    title: 'Тариф 2',
    limit: 15,
    isPopular: true,
  },
  {
    id: 4,
    price: 2500,
    title: 'Тариф 3',
    limit: 100,
  },
]
