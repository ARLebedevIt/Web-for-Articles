import { AsyncThunkAction } from '@reduxjs/toolkit'
import axios, { AxiosStatic } from 'axios'
import { StateSchema } from '@/app/providers/StoreProvider'

type ActionCreatorType<Return, Arg, RejecredValue>
  = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejecredValue }>

jest.mock('axios')

const mockedAxios = jest.mocked(axios, { shallow: false })

export class TestAsyncThunk<Return, Arg, RejecredValue> {
  dispatch: jest.MockedFn<any>

  getState: () => StateSchema

  actionCreator: ActionCreatorType<Return, Arg, RejecredValue>

  api: jest.MockedFunctionDeep<AxiosStatic>

  navigate: jest.MockedFn<any>

  constructor(
    actionCreator: ActionCreatorType<Return, Arg, RejecredValue>,
    state?: DeepPartial<StateSchema>,
  ) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn(() => state as StateSchema)

    this.api = mockedAxios
    this.navigate = jest.fn()
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg)
    const result = await action(
      this.dispatch,
      this.getState,
      { api: this.api, navigate: this.navigate },
    )
    return result
  }
}
