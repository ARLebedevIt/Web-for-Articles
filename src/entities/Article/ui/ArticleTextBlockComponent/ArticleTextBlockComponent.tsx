import React, { memo } from 'react'
import { Text } from 'shared/ui/Text/ui/Text'
import { classNames } from 'shared/lib/classNames/classNames'
import { VStack } from 'shared/ui/Stack'
import { ArticleTextBlock } from '../../model/types/article'

type ArticleTextBlockComponentProps = {
  block: ArticleTextBlock
  className?: string
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
  const { block, className } = props
  return (
    <VStack gap="8" className={classNames('', {}, [className])}>
      {block.title && (
        <Text title={block.title} />
      )}
      {block.paragraphs.map(paragraph => (
        <Text key={paragraph} text={paragraph} />
      ))}
    </VStack>
  )
})
