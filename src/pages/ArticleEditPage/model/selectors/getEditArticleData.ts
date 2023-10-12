import { StateSchema } from '@/app/providers/StoreProvider'

export const getArticleEditData = (state: StateSchema) => state.articleEditPage?.data
