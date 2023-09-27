import { Reducer } from '@reduxjs/toolkit'
import { FC, ReactNode, useEffect } from 'react'
import { useStore } from 'react-redux'
import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from '@/app/providers/StoreProvider'
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
}

interface DynamicModuleLoaderType {
  reducers: ReducersList
  removeAfterUnmount?: boolean
  children?: ReactNode
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderType> = (props) => {
  const {
    reducers,
    removeAfterUnmount = true,
    children,
  } = props
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useAppDispatch()
  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap()
    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKey]
      // Инициализация редюсера только если он ещё не был вмонтирован
      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKey, reducer)
        dispatch({ type: `@INIT ${name} reducer` })
      }
    })
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]) => {
          store.reducerManager.remove(name as StateSchemaKey)
          dispatch({ type: `@DESTROY ${name} reducer` })
        })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  )
}
