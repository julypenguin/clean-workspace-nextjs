import { useForm } from 'react-hook-form'
import { AxiosRequestConfig } from 'axios'
import { useMemo, useEffect } from 'react'
import { z } from 'zod'
import dayjs from 'dayjs'
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query'

import { useCommon } from '@model/website/useCommon'
import { useUserStore } from '@model/user/useUserStore'
import { reqFeedbackQuerylist, useSWR } from '@common/apis'
import { Field, FORM_TYPE } from '@model/user/form/constants'

// 问题与建议 hook
export const useQuestion = (props?: { code: string }) => {
  const { code } = props || { code: '' }
  const { t, push } = useCommon()

  const form = useForm<API_FEEDBACK_SAVE.REQ>({
    defaultValues: {
      content: '', // 反馈内容
      status: -1, // 0: 待反馈
      type: 3, // 3: 提交建议
    },
    mode: 'all',
  })

  const fields = {
    content: {
      name: 'content',
      type: FORM_TYPE.TEXTAREA,
      verify: z.string({ message: t('v2.E186') }),
      placeholder: t('v2.feedback_007') + '(' + t('v2.feedback_01') + ')',
    } as Extract<Field, { type: FORM_TYPE.TEXTAREA }>,
  }

  return {
    form,
    fields,
  }
}

// 使用哪一種 query
export enum QUERY_TYPE {
  USE_QUERY,
  USE_INFINITE_QUERY,
}

// 建議記錄狀態
enum FEEDBACK_STATUS {
  ALL_STATUS = -1, // 全部狀態
  WAITING = 0, // 待反馈
  FINISHED = 1, // 已反馈
}

// 建議記錄狀態翻譯
export const FeedbackStatusMap = new Map<number, string>([
  [FEEDBACK_STATUS.ALL_STATUS, 'v2.A151'],
  [FEEDBACK_STATUS.WAITING, 'v2.feedback_013'],
  [FEEDBACK_STATUS.FINISHED, 'v2.feedback_011'],
])

type Props<T> = {
  queryType?: T // 0: 正常 query, 1: infinite query
}

// 建議記錄 hook
export const useFeedbackHistory = <QueryType extends QUERY_TYPE = QUERY_TYPE.USE_QUERY>(props?: Props<QueryType>) => {
  const { queryType = QUERY_TYPE.USE_QUERY } = props || {}
  const queryClient = useQueryClient()

  const { t, push } = useCommon()
  const token = useUserStore((state) => state.token)
  const queryKey = `/userrechList/${token}`

  const form = useForm<API_FEEDBACK_QUERYLIST.REQ>({
    defaultValues: {
      startTime: dayjs().subtract(6, 'day').format('YYYY/MM/DD'),
      endTime: dayjs().format('YYYY/MM/DD'),
      page: 1,
      pageSize: 20,
      status: -1,
    },
  })

  const page = form.watch('page')

  const queryInfinite = useInfiniteQuery({
    queryKey: [queryKey],
    queryFn: ({ pageParam }) => {
      const params = { ...form.getValues() }
      if (params.status?.toString() === '-1') delete params.status
      return reqFeedbackQuerylist({
        ...params,
        startTime: dayjs(form.getValues().startTime).startOf('day').valueOf().toString(),
        endTime: dayjs(form.getValues().endTime).endOf('day').valueOf().toString(),
        page: pageParam as number,
      })
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      return (lastPageParam as number) + 1
    },
    enabled: queryType === QUERY_TYPE.USE_INFINITE_QUERY && !!token,
    retry: false,
  })

  const query = useSWR(`${queryKey}/${page}`, reqFeedbackQuerylist, {
    params: () => {
      const params = { ...form.getValues() }
      if (params.status === 0) delete params.status
      return {
        ...params,
        startTime: dayjs(params.startTime).startOf('day').valueOf().toString(),
        endTime: dayjs(params.endTime).endOf('day').valueOf().toString(),
      }
    },
    enabled: queryType === QUERY_TYPE.USE_QUERY && !!token,
    staleTime: 0,
  })

  const fields = useMemo(() => {
    return {
      startTime: {
        name: 'startTime',
        type: FORM_TYPE.DATE_PICKER,
      } as Extract<Field, { type: FORM_TYPE.DATE_PICKER }>,
      endTime: {
        name: 'endTime',
        type: FORM_TYPE.DATE_PICKER,
      } as Extract<Field, { type: FORM_TYPE.DATE_PICKER }>,
      status: {
        name: 'status',
        type: FORM_TYPE.SELECT,
        verify: z.string().optional(),
        options: Array.from(FeedbackStatusMap, ([key, value]) => ({ label: t(value), value: key })),
      } as Extract<Field, { type: FORM_TYPE.SELECT }>,
    }
  }, [])

  const head = useMemo(() => {
    return [{ label: t('v2.sports_bet_030') }, { label: t('v2.feedback_017') }, { label: t('v2.common_089') }]
  }, [])

  const refetch = () => {
    queryClient.resetQueries({ queryKey: [queryKey] }).catch((e) => console.error(e))
    return queryInfinite.fetchNextPage()
  }

  useEffect(() => {
    return () => {
      queryClient.resetQueries({ queryKey: [queryKey] }).catch((e) => console.error(e))
    }
  }, [])

  return {
    head,
    query: (queryType === QUERY_TYPE.USE_INFINITE_QUERY ? queryInfinite : query) as QueryType extends QUERY_TYPE.USE_QUERY ? typeof query : typeof queryInfinite,
    form,
    fields,
    list: queryType === QUERY_TYPE.USE_INFINITE_QUERY ? queryInfinite.data?.pages?.map((item) => item.rows)?.flat() : query.data?.rows,
    refetch: queryType === QUERY_TYPE.USE_INFINITE_QUERY ? refetch : query.refetch, // infinite query 要使用，才能清除頁數
  }
}
