import { ArticleBlock } from '../../model/types/article'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import cls from './ArticleDetails.module.scss'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { ArticleBlockType } from '../../model/consts/consts'

export const renderArticleBlock = (block: ArticleBlock) => {
  const defaultProps = {
    key: block.id,
    className: cls.block,
  }
  switch (block.type) {
    case ArticleBlockType.CODE:
      return <ArticleCodeBlockComponent {...defaultProps} block={block} />
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlockComponent {...defaultProps} block={block} />
    case ArticleBlockType.TEXT:
      return <ArticleTextBlockComponent {...defaultProps} block={block} />
    default:
      return null
  }
}
