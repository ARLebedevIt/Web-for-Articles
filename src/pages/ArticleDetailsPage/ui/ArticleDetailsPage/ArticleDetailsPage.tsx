import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { CommentList } from 'entities/Comment'
import { Text } from 'shared/ui/Text/ui/Text'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { AddCommentForm } from 'features/addCommentForm'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/articleDetailsCommentsSlice'
import cls from './ArticleDetailsPage.module.scss'

type ArticleDetailsPageProps = {}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  const dispatch = useAppDispatch()

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  if (!id) {
    return (
      <div>{t('Статья не найдена')}</div>
    )
  }

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div className={classNames(cls.ArticleDetailsPage, {}, [])}>
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title={t('Комментарии')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList
          isLoading={commentsIsLoading}
          comments={comments}
        />
      </div>
    </DynamicModuleLoader>

  )
}

export default memo(ArticleDetailsPage)
