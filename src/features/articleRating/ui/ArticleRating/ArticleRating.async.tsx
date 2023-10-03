import { Suspense, lazy } from 'react'
import { ArticleRatingProps } from './ArticleRating'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { toggleFeatures } from '@/shared/lib/features'
import { Skeleton as SkeletonRedesigned} from '@/shared/ui/redesigned/Skeleton'

export const ArticleRatingLazy = lazy(() => import('./ArticleRating'))

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated
  })
  return (
    <Suspense fallback={<Skeleton width="100%" height={120} />}>
      <ArticleRatingLazy {...props} />
    </Suspense>
  )
}
