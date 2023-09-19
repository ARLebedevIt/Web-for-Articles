import React, { memo } from 'react'
import { Text } from 'shared/ui/Text/ui/Text'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleTextBlock } from 'entities/Article/model/types/article'
import cls from './ArticleTextBlockComponent.module.scss'

type ArticleTextBlockComponentProps = {
  block: ArticleTextBlock
  className?: string
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
  const { block, className } = props
  return (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      {block.title && (
        <Text title={block.title} className={cls.title} />
      )}
      {block.paragraphs.map(paragraph => (
        <Text key={paragraph} text={paragraph} className={cls.paragraph} />
      ))}
    </div>
  )
})
