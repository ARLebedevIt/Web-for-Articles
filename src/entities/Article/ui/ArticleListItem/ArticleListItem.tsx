import { useTranslation } from 'react-i18next'
import { HTMLAttributeAnchorTarget, memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/Text'
import { Icon } from '@/shared/ui/Icon'
import ViewsIcon from '@/shared/assets/icons/views.svg'
import { Card } from '@/shared/ui/Card'
import { Avatar } from '@/shared/ui/Avatar'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { AppLink } from '@/shared/ui/AppLink'
import cls from './ArticleListItem.module.scss'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { Article, ArticleTextBlock } from '../../model/types/article'
import { ArticleBlockType, ArticleView } from '../../model/consts/consts'
import { getRouteArticlesDetails } from '@/shared/const/router'
import { AppImage } from '@/shared/ui/AppImage'
import { Skeleton } from '@/shared/ui/Skeleton'

type ArticleListItemProps = {
  className?: string
  article: Article
  view: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const {
    article, view, className, target,
  } = props
  const { t } = useTranslation()

  const category = <Text text={article.category.join(', ')} className={cls.category} />
  const views = (
    <div className={cls.views}>
      <Icon Svg={ViewsIcon} />
      <Text text={String(article.views)} />
    </div>
  )

  if (view === ArticleView.TEMPLATE) {
    const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock
    return (
      <div data-testid="ArticleListItem" className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {category}
          <AppImage
            fallback={<Skeleton width={200} height={240} />}
            src={article.img}
            className={cls.img}
            alt={article.title} />
          {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />}
          <div className={cls.footer}>
            <AppLink to={getRouteArticlesDetails(article.id)}>
              <Button theme={ButtonTheme.OUTLINE}>
                {t('Читать далее')}
              </Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    )
  }
  return (
    <AppLink
      data-testid="ArticleListItem"
      target={target}
      to={getRouteArticlesDetails(article.id)}
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <Card className={cls.card}>
        <div className={cls.imgWrapper}>
          <AppImage
            fallback={<Skeleton width="100%" height={240} />}
            src={article.img}
            className={cls.img}
            alt={article.title} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {category}
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
        <div />
      </Card>
    </AppLink>
  )
})
