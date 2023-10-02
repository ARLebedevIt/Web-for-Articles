import React, { memo } from 'react'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ArticleTextBlock } from '../../model/types/article'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'

type ArticleTextBlockComponentProps = {
  block: ArticleTextBlock
  className?: string
}

export const ArticleTextBlockComponent = memo(
  (props: ArticleTextBlockComponentProps) => {
    const { block, className } = props
    return (
      <VStack gap="8" className={classNames('', {}, [className])}>
        {block.title && (
          <ToggleFeatures
            feature="isAppRedesigned"
            on={<Text title={block.title} />}
            off={<TextDeprecated title={block.title} />}
          />
        )}
        {block.paragraphs.map(paragraph => (
          <ToggleFeatures
            feature="isAppRedesigned"
            on={<Text key={paragraph} text={paragraph} />}
            off={<TextDeprecated key={paragraph} text={paragraph} />}
          />
        ))}
      </VStack>
    )
  },
)
