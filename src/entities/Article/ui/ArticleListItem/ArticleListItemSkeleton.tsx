import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { ArticleView } from '../../model/consts/consts'
import cls from './ArticleListItem.module.scss'
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'

type ArticleListItemSkeletonProps = {
  className?: string
  view: ArticleView
}

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { view, className } = props

    const mainClass = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => cls.ArticleListItemRedesigned,
      off: () => cls.ArticleListItem,
    })

    const Skeleton = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => SkeletonRedesigned,
      off: () => SkeletonDeprecated,
    })

    if (view === ArticleView.TEMPLATE) {
      const cardContent = (
        <>
          <div className={cls.header}>
            <Skeleton border="50%" height={30} width={30} />
            <Skeleton width={150} height={16} className={cls.username} />
            <Skeleton width={150} height={16} className={cls.date} />
          </div>
          <Skeleton width={250} height={24} className={cls.title} />
          <Skeleton height={200} width="100%" className={cls.img} />
          <div className={cls.footer}>
            <Skeleton height={36} width={200} />
          </div>
        </>
      )
      return (
        <div className={classNames(mainClass, {}, [className, cls[view]])}>
          <ToggleFeatures
            feature="isAppRedesigned"
            on={
              <CardRedesigned border="partial" paddings='24' className={cls.card}>
                {cardContent}
              </CardRedesigned>
            }
            off={
              <CardDeprecated className={cls.card}>
                {cardContent}
              </CardDeprecated>
            }
          />
        </div>
      )
    }

    const cardContent = (
      <>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <Skeleton
              width="100%"
              height={140}
              border="20px"
              className={cls.img}
            />
          }
          off={
            <div className={cls.imageWrapper}>
              <Skeleton width={200} height={200} className={cls.img} />
            </div>
          }
        />
        <div className={cls.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} className={cls.title} />
      </>
    )

    return (
      <div className={classNames(mainClass, {}, [className, cls[view]])}>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <CardRedesigned paddings='0' border="partial" className={cls.card}>
              {cardContent}
            </CardRedesigned>
          }
          off={
            <CardDeprecated className={cls.card}>{cardContent}</CardDeprecated>
          }
        />
      </div>
    )
  },
)
