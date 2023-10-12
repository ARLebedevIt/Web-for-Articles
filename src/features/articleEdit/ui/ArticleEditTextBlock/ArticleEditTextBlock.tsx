import React, { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ToggleFeatures } from '@/shared/lib/features'
import { TextArea } from '@/shared/ui/redesigned/TextArea/TextArea'
import { ArticleEditDefaultProps } from '../../model/types/ArticleEditDefaultProps'
import { ArticleTextBlock } from '@/entities/Article'

type ArticleEditTextBlockTypes = ArticleEditDefaultProps & {block: ArticleTextBlock}

export const ArticleEditTextBlock = memo(
  (props: ArticleEditTextBlockTypes) => {
    const { block, className, onChangeParagraph, setBlockInfo } = props
    return (
      <VStack gap="24" max className={classNames('', {}, [className])}>
        {block.title && (
          <ToggleFeatures
            feature="isAppRedesigned"
            on={<TextArea label='Заголовок блока' value={block.title} />}
            off={<TextArea label='Заголовок блока' value={block.title} />}
          />
        )}
        {block.paragraphs.map((paragraph: string, id: number) => (
          <ToggleFeatures
            feature="isAppRedesigned"
            on={
              <TextArea
                label={`Параграф № ${id + 1}`}
                onChange={onChangeParagraph}
                onFocus={() =>
                  setBlockInfo({ paragraphId: id, blockId: block.id })
                }
                key={id}
                value={paragraph}
              />
            }
            off={
              <TextArea
                label={`Параграф № ${id + 1}`}
                onChange={onChangeParagraph}
                onFocus={() =>
                  setBlockInfo({ paragraphId: id, blockId: block.id })
                }
                key={id}
                value={paragraph}
              />
            }
          />
        ))}
      </VStack>
    )
  },
)
