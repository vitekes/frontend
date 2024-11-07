import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useFiltersStore } from 'src/store/store'
import type { TPagination } from 'src/types/global.types'

export function useFilters() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const { queryParams, isFilterUpdated, updateQueryParam } = useFiltersStore()

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
