import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Page } from 'widgets/Page/Page'
import { VStack } from 'shared/ui/Stack'
import { ArticleRecommendationsList } from 'features/articleRecommendationsList'
import { articleDetailsPageReducer } from '../../model/slice'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments'
import cls from './ArticleDetailsPage.module.scss'

type ArticleDetailsPageProps = {}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { id } = useParams<{ id: string }>()

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [])}>
        <VStack gap="16" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>

  )
}

export default memo(ArticleDetailsPage)
