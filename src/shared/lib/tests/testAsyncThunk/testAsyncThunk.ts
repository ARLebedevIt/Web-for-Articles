import { AsyncThunkAction } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'

type ActionCreatorType<Return, Arg, RejecredValue>
  = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejecredValue }>

export class TestAsyncThunk<Return, Arg, RejecredValue> {
  dispatch: jest.MockedFn<any>

  getState: () => StateSchema

  actionCreator: ActionCreatorType<Return, Arg, RejecredValue>

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejecredValue>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg)
    const result = await action(this.dispatch, this.getState, undefined)
    return result
  }
}
