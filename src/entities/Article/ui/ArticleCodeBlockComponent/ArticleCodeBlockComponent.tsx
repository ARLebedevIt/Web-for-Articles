import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Code } from 'shared/ui/Code/Code'
import { ArticleCodeBlock } from 'entities/Article/model/types/article'
import cls from './ArticleCodeBlockComponent.module.scss'

type ArticleCodeBlockComponentProps = {
  className?: string
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(({ className, block }: ArticleCodeBlockComponentProps) => {
  return (
    <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
      <Code text={block.code} />
    </div>
  )
})