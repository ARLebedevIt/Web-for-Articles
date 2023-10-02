import React, { memo } from 'react'
import { useParams } from 'react-router-dom'
import { ArticleDetails } from '@/entities/Article'
import { Card } from '@/shared/ui/redesigned/Card'

type DetailsContainerProps = {
  className?: string
}

export const DetailsContainer = memo((props: DetailsContainerProps) => {
  const { id } = useParams<{ id: string }>()
  const { className } = props
  return (
    <Card max border='partial' paddings='24' className={className}>
      <ArticleDetails id={id} />
    </Card>
  )
})
