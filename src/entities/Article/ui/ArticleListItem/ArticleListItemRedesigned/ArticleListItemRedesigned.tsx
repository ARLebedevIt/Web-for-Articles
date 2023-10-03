import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleListItemProps } from '../ArticleListItem'
import { Text } from '@/shared/ui/redesigned/Text'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Card } from '@/shared/ui/redesigned/Card'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Button } from '@/shared/ui/redesigned/Button'
import { getRouteArticlesDetails } from '@/shared/const/router'
import { ArticleTextBlock } from '../../../model/types/article'
import ViewsIcon from '@/shared/assets/icons/redesigned/views.svg'
import { ArticleBlockType, ArticleView } from '../../../model/consts/consts'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import cls from './ArticleListItemRedesigned.module.scss'

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
  const { article, view, className, target } = props
  const { t } = useTranslation()

  const views = (
    <HStack gap="8" className={cls.views}>
      <Text text={String(article.views)} />
      <Icon Svg={ViewsIcon} />
    </HStack>
  )

  const userInfo = (
    <>
      <Avatar size={32} src={article.user.avatar} className={cls.avatar} />
      <Text bold text={article.user.username} />
    </>
  )

  if (view === ArticleView.TEMPLATE) {
    const textBlock = article.blocks.find(
      block => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock
    return (
      <Card
        paddings="24"
        max
        data-testid="ArticleListItem"
        className={classNames('', {}, [className, cls[view]])}>
        <VStack max gap="16">
          <HStack gap="8" max>
            {userInfo}
            <Text text={article.createdAt} />
          </HStack>
          <Text bold title={article.title} />
          <Text bold title={article.subtitle} size="s" />
          <AppImage
            fallback={<Skeleton width="100%" height={300} />}
            src={article.img}
            className={cls.img}
            alt={article.title}
          />
          {textBlock?.paragraphs && (
            <Text
              className={cls.textBlock}
              text={textBlock.paragraphs.slice(0, 2).join(' ')}
            />
          )}
          <HStack max justify="between">
            <AppLink to={getRouteArticlesDetails(article.id)}>
              <Button
                data-testid="ArticleListItem.ReadMore.Btn"
                variant="outline">
                {t('Читать далее')}
              </Button>
            </AppLink>
            {views}
          </HStack>
        </VStack>
      </Card>
    )
  }
  return (
    <AppLink
      data-testid="ArticleListItem"
      target={target}
      to={getRouteArticlesDetails(article.id)}
      className={classNames(cls.ArticleListItemRedesigned, {}, [
        className,
        cls[view],
      ])}>
      <Card paddings='0' border="partial" className={cls.card}>
        <AppImage
          fallback={<Skeleton width="100%" height={178} />}
          src={article.img}
          className={cls.img}
          alt={article.title}
        />
        <VStack gap="4" className={cls.info}>
          <Text text={article.title} bold className={cls.title} />
          <VStack gap="4" max className={cls.footer}>
            <HStack justify="between" max>
              <Text text={article.createdAt} />
              {views}
            </HStack>
            <HStack gap="4">{userInfo}</HStack>
          </VStack>
        </VStack>
      </Card>
    </AppLink>
  )
})
