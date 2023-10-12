import React, { Dispatch, SetStateAction, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from '@/shared/ui/redesigned/Text'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Article } from '@/entities/Article'
import { Button } from '@/shared/ui/redesigned/Button'
import { TextArea } from '@/shared/ui/redesigned/TextArea/TextArea'
import { editArticleBlocks } from '../../model/helpers/editArticleBlocks'
import cls from './ArticleEditContainer.module.scss'

type ArticleEditContainerProps = {
  article?: Article
  articleId?: string
  onFinishEditing: (value: 'save' | 'cancel') => void
  onChangeTitleBlock?: (value: string) => void
  onChangeParagraph: (value: string) => void
  onChangeSubtitleBlock: (value: string) => void
  onChangeCoverBlock: (value: string) => void
  setBlockInfo: Dispatch<
    SetStateAction<{ paragraphId?: number; blockId: string }>
  >
}

export const ArticleEditContainer = memo((props: ArticleEditContainerProps) => {
  const {
    article,
    articleId,
    onChangeParagraph,
    onChangeTitleBlock,
    onFinishEditing,
    onChangeSubtitleBlock,
    onChangeCoverBlock,
    setBlockInfo,
  } = props
  const { t } = useTranslation()
  return (
    <VStack max gap="32" className="cls.ArticleEditPage">
      <Text title={t(`Редактирование статьи с ID: ${articleId}`)} />
      <TextArea
        label="Заголовок"
        value={article?.title}
        onChange={onChangeTitleBlock}
      />
      <TextArea
        label="Подзаголовок"
        value={article?.subtitle}
        onChange={onChangeSubtitleBlock}
      />
           <img
          src={article?.img}
          className={cls.img}
          alt="Ошибка загрузки изображения"
        />
      <TextArea
        label="Изображение"
        value={article?.img}
        onChange={onChangeCoverBlock}
      />
      {article?.blocks?.map(block =>
        editArticleBlocks({
          block,
          onChangeParagraph,
          setBlockInfo,
        }),
      )}
      <HStack gap='24'>
        <Button color='success' onClick={() => onFinishEditing('save')}>{t('Отправить')}</Button>
        <Button color='error' onClick={() => onFinishEditing('cancel')}>{t('Отменить изменения')}</Button>
      </HStack>
    </VStack>
  )
})
