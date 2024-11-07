// import { useMutation } from '@tanstack/react-query'
// import blogService from 'src/services/blog.service'

// export function useFollowBlog(id: number, type: 'follow' | 'unfollow') {
//   const isFollow = type === 'follow'
//   const { data, isPending, isError } = useMutation({
//     mutationKey: isFollow ? ['follow', id] : ['unfollow', id],
//     mutationFn: () =>
//       isFollow ? blogService.follow(id) : blogService.unfollow(id),
//   })
// }
