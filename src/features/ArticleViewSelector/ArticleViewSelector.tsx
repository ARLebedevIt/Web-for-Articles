import React, { memo } from 'react'
import { ArticleView } from '@/entities/Article'
import TemplateIcon from '@/shared/assets/icons/template.svg'
import GridIcon from '@/shared/assets/icons/grid.svg'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleViewSelector.module.scss'

type ArticleViewSelectorProps = {
  className?: string
  view: ArticleView
  onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.GRID,
    icon: GridIcon,
  },
  {
    view: ArticleView.TEMPLATE,
    icon: TemplateIcon,
  },
]

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { view, className, onViewClick } = props
  // const onSetView = (newView: ArticleView) => {
  //   onViewClick?.(newView)
  // }
  // onClick={() => onSetView(viewType.view)}

  const onSetView = (newView: ArticleView) => () => {
    onViewClick?.(newView)
  }
  // onClick={onSetView(viewType.view)}
  return (
    <div>
      {viewTypes.map(viewType => (
        <Button
          key={viewType.view}
          onClick={onSetView(viewType.view)}
          theme={ButtonTheme.CLEAR}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames('', { [cls.noSelected]: viewType.view !== view }, [className])}
          />
        </Button>
      ))}
    </div>
  )
})
