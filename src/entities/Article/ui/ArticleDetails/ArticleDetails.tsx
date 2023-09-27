import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextAlign, TextSize } from '@/shared/ui/Text'
import { Skeleton } from '@/shared/ui/Skeleton'
import { Avatar } from '@/shared/ui/Avatar'
import ViewsIcon from '@/shared/assets/icons/views.svg'
import CalendarIcon from '@/shared/assets/icons/calendar.svg'
import { Icon } from '@/shared/ui/Icon'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { HStack, VStack } from '@/shared/ui/Stack'
import { ArticleBlockType } from '../../model/consts/consts'
import { ArticleBlock } from '../../model/types/article'
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from
  '../../model/selectors/articleDetails'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleSlice'
import cls from './ArticleDetails.module.scss'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

interface ArticleDetailsProps {
  id?: string
  className?: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { id, className } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} className={cls.articleBlock} block={block} />
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} block={block} className={cls.articleBlock} />
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} block={block} className={cls.articleBlock} />
      default:
        return null
    }
  }, [])

  useInitialEffect(() => {
    dispatch(fetchArticleById(id))
  })

  const isLoading = useSelector(getArticleDetailsIsLoading)
  const article = useSelector(getArticleDetailsData)
  const error = useSelector(getArticleDetailsError)

  let content

  if (isLoading) {
    content = (
      <>
        <HStack max justify="center">
          <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        </HStack>
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </>
    )
  } else if (error) {
    content = (
      <Text align={TextAlign.CENTER} title={t('Произошла ошибка при загрузке статьи')} />
    )
  } else {
    content = (
      <>
        <HStack max justify="center">
          <Avatar size={200} src={article?.img} />
        </HStack>
        <VStack data-testid="ArticleDetails.Info" gap="8" max>
          <Text size={TextSize.L} title={article?.title} text={article?.subtitle} />
          <HStack gap="8">
            <Icon Svg={ViewsIcon} />
            <Text text={String(article?.views)} />
          </HStack>
          <HStack gap="8">
            <Icon Svg={CalendarIcon} />
            <Text text={article?.createdAt} />
          </HStack>
        </VStack>
        {article?.blocks.map(renderBlock)}
      </>
    )
  }

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <VStack gap="16" max className={classNames(cls.ArticleDetails, {}, [className])}>{content}</VStack>
    </DynamicModuleLoader>
  )
})
