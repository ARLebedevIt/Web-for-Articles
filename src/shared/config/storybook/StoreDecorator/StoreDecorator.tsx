import { Decorator } from '@storybook/react'
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { articleDetailsReducer } from '@/entities/Article/testing'
import { loginReducer } from '@/features/AuthByUserName/testing'
import { addCommentFormReducer } from '@/features/addCommentForm/testing'
import { profileReducer } from '@/features/editableProfileCard/testing'
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing'
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  articleDetails: articleDetailsReducer,
  profile: profileReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
}

export const StoreDecorator = (
  state?: DeepPartial<StateSchema>,
  asyncReducer?: ReducersList,
): Decorator => (Story) => {
  return (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducer }}>
      <Story />
    </StoreProvider>
  )
}
