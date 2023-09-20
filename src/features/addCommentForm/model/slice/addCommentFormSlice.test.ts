import { AddComentFormShema } from '../types/addCommentForm'
import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice'

describe('addCommentFormSlice test', () => {
  test('should set text to state', () => {
    const state: DeepPartial<AddComentFormShema> = {
      text: '',
    }
    expect(addCommentFormReducer(
      state as AddComentFormShema,
      addCommentFormActions.setText('some text'),
    ))
      .toEqual({ text: 'some text' })
  })
})
