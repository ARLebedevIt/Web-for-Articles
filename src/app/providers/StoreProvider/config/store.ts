import {
  CombinedState, Reducer, ReducersMapObject, configureStore,
} from '@reduxjs/toolkit'
import { userReducer } from '@/entities/User'
import { $api } from '@/shared/api/api'
import { rtkApi } from '@/shared/api/rtkApi'
import { StateSchema } from './StateSchema'
import { createReducerManager } from './reducerManager'
import { scrollPositionSaverReducer } from '@/features/ScrollPositionSaver'

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    scrollPositionSaver: scrollPositionSaverReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const extraArgs = {
    api: $api,
  }

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArgs,
      },
    }).concat(rtkApi.middleware),
  })

  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
