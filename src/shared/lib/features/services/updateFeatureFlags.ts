import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { FeatureFlags } from '@/shared/types/featureFlags'
import { updateFeatureFlagsMutation } from '../api/featureFlagsApi'
import { getAllFeatureFlags, setFeatureFlags } from '../lib/setGetFeatures'

interface UpdateFeatureFlagsOptions {
  userId: string
  newFeatures: Partial<FeatureFlags>
}

export const updateFeatureFlag = createAsyncThunk<void, UpdateFeatureFlagsOptions, ThunkConfig<string>>(
  'features/updateFeatureFlag', 
  async ({userId, newFeatures}, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi

    const allFeatures = {
      ...getAllFeatureFlags(),
      ...newFeatures
    }

    try {
       await dispatch(updateFeatureFlagsMutation({
        userId,
        features: allFeatures,
       })
    )
    setFeatureFlags(allFeatures)
    window.location.reload()
    return undefined
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  },
)
