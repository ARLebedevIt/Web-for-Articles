import React, { memo, useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Page } from '@/widgets/Page'
import { ToggleFeatures } from '@/shared/lib/features'
import { fetchArticleById } from '@/entities/Article'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  articleEditActions,
  articleEditReducer,
} from '../../model/slice/articleEditPageSlice'
import { editArticleData } from '../../model/slice/editArticleData'
import { getArticleEditData } from '../../model/selectors/getEditArticleData'
import { ArticleEditContainer } from '@/features/articleEdit'
import { getRouteArticlesDetails } from '@/shared/const/router'

const reducers = {
  articleEditPage: articleEditReducer,
}

const ArticleEditPage = () => {
  const { id } = useParams<string>()
  const dispatch = useAppDispatch()
  const article = useSelector(getArticleEditData)
  const navigate = useNavigate()
  
  const [{ paragraphId, blockId }, setBlockInfo] = useState<{
    paragraphId?: number
    blockId: string
  }>({ paragraphId: 0, blockId: '' })

  useEffect(() => {
    dispatch(fetchArticleById(id))
  }, [id, dispatch])

  const onFinishEditing = useCallback((result: 'save' | 'cancel') => {
    if (result === 'save') {
      dispatch(editArticleData())
    }
    navigate(getRouteArticlesDetails(id))
  }, [dispatch, id, navigate])

  const onChangeTitleBlock = useCallback(
    (value: string) => {
      dispatch(articleEditActions.updateArticle({ title: value || '' }))
    },
    [dispatch],
  )

  const onChangeSubtitleBlock = useCallback(
    (value: string) => {
      dispatch(articleEditActions.updateArticle({ subtitle: value || '' }))
    },
    [dispatch],
  )

  const onChangeCoverBlock = useCallback(
    (value: string) => {
      dispatch(articleEditActions.updateArticle({ img: value || '' }))
    },
    [dispatch],
  )

  const onChangeParagraph = useCallback(
    (value: string) => {
      dispatch(
        articleEditActions.updateArticleBlocks({ value, paragraphId, blockId }),
      )
    },
    [blockId, dispatch, paragraphId],
  )
  const containerProps = {
    article,
    articleId: id,
    onFinishEditing,
    onChangeParagraph,
    onChangeTitleBlock,
    onChangeSubtitleBlock,
    onChangeCoverBlock,
    setBlockInfo,
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<ArticleEditContainer {...containerProps} />}
          off={<ArticleEditContainer {...containerProps} />}
        />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleEditPage)
