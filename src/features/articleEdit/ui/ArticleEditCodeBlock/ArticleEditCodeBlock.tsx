import React, { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ToggleFeatures } from '@/shared/lib/features'
import { TextArea } from '@/shared/ui/redesigned/TextArea/TextArea'
import { ArticleEditDefaultProps } from '../../model/types/ArticleEditDefaultProps'
import { ArticleCodeBlock } from '@/entities/Article'

type ArticleEditCodeBlockTypes = ArticleEditDefaultProps & {
  block: ArticleCodeBlock
}

export const ArticleEditCodeBlock = memo((props: ArticleEditCodeBlockTypes) => {
  const { block, className, onChangeParagraph, setBlockInfo } = props
  return (
    <VStack max gap="24" className={classNames('', {}, [className])}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <TextArea 
            label="Секция с кодом"
            onChange={onChangeParagraph}
            onFocus={() => setBlockInfo({ blockId: block.id })}
            key={block.id}
            value={block.code}
          />
        }
        off={
          <TextArea
            label="Секция с кодом"
            onChange={onChangeParagraph}
            onFocus={() => setBlockInfo({ blockId: block.id })}
            key={block.id}
            value={block.code}
          />
        }
      />
    </VStack>
  )
})
