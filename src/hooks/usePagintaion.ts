import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import {
  useAlbumsPaginationStore,
  useContestPaginationStore,
  usePostsPaginationStore,
  useQuestsPaginationStore,
} from 'src/store/store.pagination'
import type { TPagination } from 'src/types/global.types'

// class UsePagination {
//   useAlbumsPagination() {
//     const pathname = usePathname()
//     const searchParams = useSearchParams()
//     const { replace } = useRouter()

//     const { queryParams, isFilterUpdated, updateQueryParam } =
//       useAlbumsPaginationStore()

//     useEffect(() => {
//       searchParams.forEach((value, key) => {
//         updateQueryParam({
//           key: key as keyof TPagination,
//           value,
//         })
//       })
//     }, [])

//     const updateQueryParams = (key: keyof TPagination, value: string) => {
//       const newParams = new URLSearchParams(searchParams.toString())

//       if (value) {
//         newParams.set(key, String(value))
//       } else {
//         newParams.delete(key)
//       }

//       replace(pathname + `?${newParams.toString()}`)
//       updateQueryParam({ key, value })
//     }

//     return {
//       updateQueryParams,
//       queryParams,
//       isFilterUpdated,
//     }
//   }
//   usePostsPagination() {
//     const pathname = usePathname()
//     const searchParams = useSearchParams()
//     const { replace } = useRouter()

//     const { queryParams, isFilterUpdated, updateQueryParam } =
//       usePostsPaginationStore()

//     useEffect(() => {
//       searchParams.forEach((value, key) => {
//         updateQueryParam({
//           key: key as keyof TPagination,
//           value,
//         })
//       })
//     }, [])

//     const updateQueryParams = (key: keyof TPagination, value: string) => {
//       const newParams = new URLSearchParams(searchParams.toString())

//       if (value) {
//         newParams.set(key, String(value))
//       } else {
//         newParams.delete(key)
//       }

//       replace(pathname + `?${newParams.toString()}`)
//       updateQueryParam({ key, value })
//     }

//     return {
//       updateQueryParams,
//       queryParams,
//       isFilterUpdated,
//     }
//   }
//   useQuestsPagination() {
//     const pathname = usePathname()
//     const searchParams = useSearchParams()
//     const { replace } = useRouter()

//     const { queryParams, isFilterUpdated, updateQueryParam } =
//       useQuestsPaginationStore()

//     useEffect(() => {
//       searchParams.forEach((value, key) => {
//         updateQueryParam({
//           key: key as keyof TPagination,
//           value,
//         })
//       })
//     }, [])

//     const updateQueryParams = (key: keyof TPagination, value: string) => {
//       const newParams = new URLSearchParams(searchParams.toString())

//       if (value) {
//         newParams.set(key, String(value))
//       } else {
//         newParams.delete(key)
//       }

//       replace(pathname + `?${newParams.toString()}`)
//       updateQueryParam({ key, value })
//     }

//     return {
//       updateQueryParams,
//       queryParams,
//       isFilterUpdated,
//     }
//   }
//   useContestsPagination() {
//     const pathname = usePathname()
//     const searchParams = useSearchParams()
//     const { replace } = useRouter()

//     const { queryParams, isFilterUpdated, updateQueryParam } =
//       useContestPaginationStore()

//     useEffect(() => {
//       searchParams.forEach((value, key) => {
//         updateQueryParam({
//           key: key as keyof TPagination,
//           value,
//         })
//       })
//     }, [])

//     const updateQueryParams = (key: keyof TPagination, value: string) => {
//       const newParams = new URLSearchParams(searchParams.toString())

//       if (value) {
//         newParams.set(key, String(value))
//       } else {
//         newParams.delete(key)
//       }

//       replace(pathname + `?${newParams.toString()}`)
//       updateQueryParam({ key, value })
//     }

//     return {
//       updateQueryParams,
//       queryParams,
//       isFilterUpdated,
//     }
//   }
// }

export function useAlbumsPagination() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const { queryParams, isFilterUpdated, updateQueryParam } =
    useAlbumsPaginationStore()

  useEffect(() => {
    searchParams.forEach((value, key) => {
      updateQueryParam({
        key: key as keyof TPagination,
        value,
      })
    })
  }, [])

  const updateQueryParams = (key: keyof TPagination, value: string) => {
    const newParams = new URLSearchParams(searchParams.toString())

    if (value) {
      newParams.set(key, String(value))
    } else {
      newParams.delete(key)
    }

    replace(pathname + `?${newParams.toString()}`)
    updateQueryParam({ key, value })
  }

  return {
    updateQueryParams,
    queryParams,
    isFilterUpdated,
  }
}
export function usePostsPagination() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const { queryParams, isFilterUpdated, updateQueryParam } =
    usePostsPaginationStore()

  useEffect(() => {
    searchParams.forEach((value, key) => {
      updateQueryParam({
        key: key as keyof TPagination,
        value,
      })
    })
  }, [])

  const updateQueryParams = (key: keyof TPagination, value: string) => {
    const newParams = new URLSearchParams(searchParams.toString())

    if (value) {
      newParams.set(key, String(value))
    } else {
      newParams.delete(key)
    }

    replace(pathname + `?${newParams.toString()}`)
    updateQueryParam({ key, value })
  }

  return {
    updateQueryParams,
    queryParams,
    isFilterUpdated,
  }
}
export function useQuestsPagination() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const { queryParams, isFilterUpdated, updateQueryParam } =
    useQuestsPaginationStore()

  useEffect(() => {
    searchParams.forEach((value, key) => {
      updateQueryParam({
        key: key as keyof TPagination,
        value,
      })
    })
  }, [])

  const updateQueryParams = (key: keyof TPagination, value: string) => {
    const newParams = new URLSearchParams(searchParams.toString())

    if (value) {
      newParams.set(key, String(value))
    } else {
      newParams.delete(key)
    }

    replace(pathname + `?${newParams.toString()}`)
    updateQueryParam({ key, value })
  }

  return {
    updateQueryParams,
    queryParams,
    isFilterUpdated,
  }
}
export function useContestsPagination() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const { queryParams, isFilterUpdated, updateQueryParam } =
    useContestPaginationStore()

  useEffect(() => {
    searchParams.forEach((value, key) => {
      updateQueryParam({
        key: key as keyof TPagination,
        value,
      })
    })
  }, [])

  const updateQueryParams = (key: keyof TPagination, value: string) => {
    const newParams = new URLSearchParams(searchParams.toString())

    if (value) {
      newParams.set(key, String(value))
    } else {
      newParams.delete(key)
    }

    replace(pathname + `?${newParams.toString()}`)
    updateQueryParam({ key, value })
  }

  return {
    updateQueryParams,
    queryParams,
    isFilterUpdated,
  }
}
