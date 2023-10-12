import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/deprecated/Text'
import ViewsIcon from '@/shared/assets/icons/deprecated/views.svg'
import cls from '../ArticleListItem.module.scss'
import { getRouteArticlesDetails } from '@/shared/const/router'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'
import { Icon } from '@/shared/ui/deprecated/Icon'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import { Card } from '@/shared/ui/deprecated/Card'
import { AppLink } from '@/shared/ui/deprecated/AppLink'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { ArticleListItemProps } from '../ArticleListItem'
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { ArticleBlockType, ArticleView } from '../../../model/consts/consts'
import { ArticleTextBlock } from '../../../model/types/article'

export const ArticleListItemDeprecated = memo((props: ArticleListItemProps) => {
  const { article, view, className, target } = props
  const { t } = useTranslation('articles')

  const category = (
    <Text
      data-testid="ArticleListItem.Catergory"
      text={article?.category?.join(', ')}
      className={cls.category}
    />
  )
  const views = (
    <div className={cls.views}>
      <Icon Svg={ViewsIcon} />
      <Text text={String(article.views)} />
    </div>
  )

  if (view === ArticleView.TEMPLATE) {
    const textBlock = article?.blocks?.find(
      block => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock
    return (
        <Card 
        data-testid="ArticleListItem"
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
          <div className={cls.header}>
            <Avatar size={30} src={article?.user?.avatar} />
            <Text text={article?.user?.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {category}
          <AppImage
            fallback={<Skeleton width="100%" height={240} />}
            src={article.img}
            className={cls.img}
            alt={article.title}
          />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
          )}
          <div className={cls.footer}>
            <AppLink to={getRouteArticlesDetails(article?.id)}>
              <Button
                data-testid="ArticleListItem.ReadMore.Btn"
                theme={ButtonTheme.OUTLINE}>
                {t('Читать далее')}
              </Button>
            </AppLink>
            {views}
          </div>
        </Card>
    )
  }
  return (
    <AppLink
      data-testid="ArticleListItem"
      target={target}
      to={getRouteArticlesDetails(article?.id)}
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <Card className={cls.card}>
        <div className={cls.imgWrapper}>
          <AppImage
            fallback={<Skeleton width="100%" height={240} />}
            src={article.img}
            className={cls.img}
            alt={article.title}
          />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {category}
          {views}
        </div>
        <Text
          data-testid="ArticleListItem.Title"
          text={article.title}
          className={cls.title}
        />
        <div />
      </Card>
    </AppLink>
  )
})
