import { useMutation } from '@tanstack/react-query'
import viewsService, { type TEndPoints } from 'src/services/views.service'

export function useView(type: TEndPoints, id: number) {
  const { isPending } = useMutation({
    mutationKey: [`${type} add view`, id],
    mutationFn: () => viewsService.addView(type, id),
  })
  return id
}
