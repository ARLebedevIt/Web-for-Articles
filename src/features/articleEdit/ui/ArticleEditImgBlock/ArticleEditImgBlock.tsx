import React, { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ToggleFeatures } from '@/shared/lib/features'
import { TextArea } from '@/shared/ui/redesigned/TextArea/TextArea'
import { ArticleImageBlock } from '@/entities/Article'
import { ArticleEditDefaultProps } from '../../model/types/ArticleEditDefaultProps'

type ArticleEditImgBlockTypes = ArticleEditDefaultProps & {
  block: ArticleImageBlock
}

export const ArticleEditImgBlock = memo((props: ArticleEditImgBlockTypes) => {
  const { block, className, onChangeParagraph, setBlockInfo } = props
  return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <VStack max gap="24" className={classNames('', {}, [className])}>
          <TextArea
            label="Изображение"
            onChange={onChangeParagraph}
            onFocus={() => setBlockInfo({ blockId: block.id })}
            key={block.id}
            value={block.src}
          />
          </VStack>
        }
        off={
          <VStack max gap="24" className={classNames('', {}, [className])}>
          <TextArea
            label="Изображение"
            onChange={onChangeParagraph}
            onFocus={() => setBlockInfo({ blockId: block.id })}
            key={block.id}
            value={block.src}
          />
          </VStack>
        }
      />
  )
})
