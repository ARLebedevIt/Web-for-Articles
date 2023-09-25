import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Page } from '@/widgets/Page/Page'

type ArticleEditPageProps = {}

const ArticleEditPage = (props: ArticleEditPageProps) => {
  const { t } = useTranslation()
  const { id } = useParams<{id: string}>()
  const isEdit = Boolean(id)
  return (
    <Page>
      {isEdit ? t(`Редактирование статьи с ID: ${id}`) : t('Cоздание новой статьи')}
    </Page>
  )
}

export default memo(ArticleEditPage)
