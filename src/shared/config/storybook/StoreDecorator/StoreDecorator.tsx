import { Decorator } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleSlice'
import { profileReducer } from 'entities/Profile'
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice'
import { addCommentFormReducer } from 'features/addCommentForm/model/slice/addCommentFormSlice'
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice'
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  articleDetails: articleDetailsReducer,
  profile: profileReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
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
