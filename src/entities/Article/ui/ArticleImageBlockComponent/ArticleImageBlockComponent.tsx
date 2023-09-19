import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextAlign } from 'shared/ui/Text/ui/Text'
import { ArticleImageBlock } from 'entities/Article/model/types/article'
import cls from './ArticleImageBlockComponent.module.scss'

type ArticleImageBlockComponentProps = {
  className?: string
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => {
  return (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
      <img src={block.src} className={cls.img} alt="Ошибка загрузки изображения" />
      {block.title && (
        <Text text={block.title} align={TextAlign.CENTER} />
      )}
    </div>
  )
})
