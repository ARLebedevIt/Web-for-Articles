import { Dispatch, SetStateAction } from 'react'
import { ArticleBlockType } from '@/entities/Article'
import { ArticleEditTextBlock } from '../../ui/ArticleEditTextBlock/ArticleEditTextBlock'
import { ArticleEditCodeBlock } from '../../ui/ArticleEditCodeBlock/ArticleEditCodeBlock'
import { ArticleEditImgBlock } from '../../ui/ArticleEditImgBlock/ArticleEditImgBlock'

type editArticleBlocksTypes = {
  block: any
  onChangeParagraph: (value: string) => void
  setBlockInfo: Dispatch<
    SetStateAction<{ paragraphId?: number; blockId: string }>
  >
}

export const editArticleBlocks = ({
  block,
  onChangeParagraph,
  setBlockInfo,
}: editArticleBlocksTypes) => {

  const defaultProps = {
    setBlockInfo,
    onChangeParagraph,
    block
  }
  
  switch (block.type) {
    case ArticleBlockType.CODE:
      return (
        <ArticleEditCodeBlock
          key={block.id}
          {...defaultProps}
        />
      )
    case ArticleBlockType.IMAGE:
      return (
        <ArticleEditImgBlock
          {...defaultProps}
          key={block.id}
        />
      )
    case ArticleBlockType.TEXT:
      return (
        <ArticleEditTextBlock
          key={block.id}
          {...defaultProps}
        />
      )
    default:
      return null
  }
}
