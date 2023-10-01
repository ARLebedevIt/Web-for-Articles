import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { User, userActions } from '@/entities/User'

interface LoginByUsernameProps {
  username: string;
  password: string;
}

enum LoginError {
  INCORRECT_DATA
}

export const loginByUserName = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi
    try {
      const response = await extra.api.post<User>('/login', authData)

      if (!response.data) {
        throw new Error()
      }

      dispatch(userActions.setAuthData(response.data))
      // extra.navigate?.('/profile')
      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  },
)
