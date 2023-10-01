import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { User } from '../types/user'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'
import { getUserDataByIdQuery } from '../../api/userApi'

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  'User/initAuthData',
  async (_,thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi

    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY)
    
    if (!userId) {
      return rejectWithValue('error')
    }
    
    try {
      const response = await dispatch(getUserDataByIdQuery(userId)).unwrap()
      return response
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  },
)