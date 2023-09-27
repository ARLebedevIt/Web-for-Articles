import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ArticleDetails } from '@/entities/Article'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/Stack'
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList'
import { articleDetailsPageReducer } from '../../model/slice'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments'
import cls from './ArticleDetailsPage.module.scss'
import { ArticleRating } from '@/features/articleRating'

type ArticleDetailsPageProps = {}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return null
  }

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [])}>
        <VStack gap="16" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ArticleRating articleId={id} />
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>

  )
}

export default memo(ArticleDetailsPage)
