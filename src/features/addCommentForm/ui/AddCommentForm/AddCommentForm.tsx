import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { HStack } from '@/shared/ui/Stack'
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice'
import { getAddCommentFormText } from '../../model/selectors/AddCommentFormSelectors'
import cls from './AddCommentForm.module.scss'

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
}

const AddCommentForm = memo(
  ({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation()
    const text = useSelector(getAddCommentFormText)
    const dispatch = useAppDispatch()

    const onCommentTextChange = useCallback(
      (value: string) => {
        dispatch(addCommentFormActions.setText(value))
      },
      [dispatch],
    )

    const onSendHandler = useCallback(() => {
      onSendComment(text || '')
      onCommentTextChange('')
    }, [onCommentTextChange, onSendComment, text])

    return (
      <DynamicModuleLoader reducers={reducers}>
        <HStack
          data-testid="AddCommentForm"
          justify="between"
          max
          className={classNames(cls.AddCommentForm, {}, [className])}>
          <Input
            data-testid="AddCommentForm.Input"
            className={cls.input}
            placeholder={t('Введите текст комментария')}
            value={text}
            onChange={onCommentTextChange}
          />
          <Button
            data-testid="AddCommentForm.Btn"
            onClick={onSendHandler}
            theme={ButtonTheme.OUTLINE}>
            {t('Отправить')}
          </Button>
        </HStack>
      </DynamicModuleLoader>
    )
  },
)

export default memo(AddCommentForm)
