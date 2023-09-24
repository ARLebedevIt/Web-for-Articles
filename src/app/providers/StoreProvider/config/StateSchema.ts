import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { ArticleDetailsSchema } from 'entities/Article'
import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/AuthByUserName'
import { AddComentFormShema } from 'features/addCommentForm'
import { ProfileSchema } from 'features/editableProfileCard'
import { ArticleDetailsPageSchema }
  from 'pages/ArticleDetailsPage'
import { ArticlesPageSchema } from 'pages/ArticlesPage'
import { rtkApi } from 'shared/api/rtkApi'
import { ScrollPositionSaverSchema } from 'widgets/ScrollPositionSaver'

export interface StateSchema {
  user: UserSchema
  scrollPositionSaver: ScrollPositionSaverSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,
  // Async Reducers
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  addCommentForm?: AddComentFormShema
  articlesPage?: ArticlesPageSchema
  articleDetailsPage?: ArticleDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArgs {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArgs
  state: StateSchema
}
