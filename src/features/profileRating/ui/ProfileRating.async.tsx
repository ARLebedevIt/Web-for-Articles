import { Suspense, lazy } from 'react'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { ProfileRatingProps } from './ProfileRating'
import { toggleFeatures } from '@/shared/lib/features'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'

export const ProfileRatingLazy = lazy(() => import('./ProfileRating'))

export const ProfileRatingAsync = (props: ProfileRatingProps) => {
  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated
  })
  return (
    <Suspense fallback={<Skeleton  width="100%" height={120} />}>
      <ProfileRatingLazy {...props} />
    </Suspense>
  )
}
