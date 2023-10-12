import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
  Text as TextDeprecated,
  TextAlign,
  TextSize,
} from '@/shared/ui/deprecated/Text'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import CalendarIcon from '@/shared/assets/icons/deprecated/calendar.svg'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleSlice'
import cls from './ArticleDetails.module.scss'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { renderArticleBlock } from './renderBlock'
import { Icon } from '@/shared/ui/redesigned/Icon'
import ViewIcon from '@/shared/assets/icons/deprecated/views.svg'

interface ArticleDetailsProps {
  id?: string
  className?: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
}

const DeprecatedComponent = () => {
  const article = useSelector(getArticleDetailsData)
  if (!article?.blocks) {
    return null
  }
  return (
    <>
      <HStack justify="center" max className={cls.avatarWrapper}>
        <Avatar size={200} src={article?.img} className={cls.avatar} />
      </HStack>
      <VStack gap="4" max data-testid="ArticleDetails.Info">
        <TextDeprecated
          className={cls.title}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <HStack gap="8" className={cls.articleInfo}>
          <Icon className={cls.icon} Svg={ViewIcon} />
          <TextDeprecated text={String(article?.views)} />
        </HStack>
        <HStack gap="8" className={cls.articleInfo}>
          <Icon className={cls.icon} Svg={CalendarIcon} />
          <TextDeprecated text={article?.createdAt} />
        </HStack>
      </VStack>
      {article?.blocks.map(item => renderArticleBlock(item))}
    </>
  )
}

const Redesigned = () => {
  const article = useSelector(getArticleDetailsData)
  if (!article?.blocks) {
    return null
  }
  return (
    <>
      <Text title={article?.title} size="l" bold />
      <Text title={article?.subtitle} />
      <AppImage
        fallback={
          <SkeletonRedesigned width="100%" height={420} border="16px" />
        }
        src={article?.img}
        className={cls.img}
      />
      {article?.blocks.map(item => renderArticleBlock(item))}
    </>
  )
}

export const ArticleDetailsSkeleton = () => {
  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  })
  return (
    <VStack gap="16" max>
      <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
      <Skeleton className={cls.title} width={300} height={32} />
      <Skeleton className={cls.skeleton} width={600} height={24} />
      <Skeleton className={cls.skeleton} width="100%" height={200} />
      <Skeleton className={cls.skeleton} width="100%" height={200} />
    </VStack>
  )
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const error = useSelector(getArticleDetailsError)
  const { t } = useTranslation('article-details')
  
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id))
    }
  }, [dispatch, id])

  let content

  if (isLoading) {
    content = <ArticleDetailsSkeleton />
  } else if (error) {
    content = (
      <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <Text
        align={TextAlign.CENTER}
        title={t('Произошла ошибка при загрузке статьи')}
      />
      }
      off={
        <TextDeprecated
        align={TextAlign.CENTER}
        title={t('Произошла ошибка при загрузке статьи')}
      />
      }
      />

    )
  } else {
    content = (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<Redesigned />}
        off={<DeprecatedComponent />}
      />
    )
  }

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <VStack
        gap="16"
        max
        className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </VStack>
    </DynamicModuleLoader>
  )
})
