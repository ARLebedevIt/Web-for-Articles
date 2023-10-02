import React, { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ArticleImageBlock } from '../../model/types/article'
import cls from './ArticleImageBlockComponent.module.scss'
import { Text } from '@/shared/ui/redesigned/Text'
import { ToggleFeatures } from '@/shared/lib/features'

type ArticleImageBlockComponentProps = {
  className?: string
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(
  ({ className, block }: ArticleImageBlockComponentProps) => {
    return (
      <VStack
        align="center"
        max
        gap="16"
        className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
        <img
          src={block.src}
          className={cls.img}
          alt="Ошибка загрузки изображения"
        />
        {block.title && (
          <ToggleFeatures
            feature="isAppRedesigned"
            on={<Text text={block.title} align="center" />}
            off={<TextDeprecated text={block.title} align={TextAlign.CENTER} />}
          />
        )}
      </VStack>
    )
  },
)
