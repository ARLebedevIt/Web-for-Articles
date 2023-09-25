import { rtkApi } from '@/shared/api/rtkApi'
import { Notification } from '../model/types/notifications'

const notificationApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getNotifications: build.query<Notification[], null>({
      query: () => ({
        url: '/notifications',
      }),
    }),
    // createArticleRecommendation: build.mutation({
    //   query: limit => ({
    //     url: '/articles',
    //     params: {
    //       _limit: limit,
    //     },
    //     method: 'PUT',
    //   }),
    // }),
  }),
})

export const useNotifications = notificationApi.useGetNotificationsQuery
// export const useCreateArticleRecommendation = recommendationsApi.useCreateArticleRecommendationMutation
