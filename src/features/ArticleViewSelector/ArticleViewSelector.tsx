import React, { memo } from 'react'
import { ArticleView } from '@/entities/Article'
import TemplateIconDeprecated from '@/shared/assets/icons/deprecated/template.svg'
import GridIconDeprecated from '@/shared/assets/icons/deprecated/grid.svg'
import TemplateIcon from '@/shared/assets/icons/redesigned/template.svg'
import GridIcon from '@/shared/assets/icons/redesigned/grid.svg'
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleViewSelector.module.scss'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Card } from '@/shared/ui/redesigned/Card'
import { HStack } from '@/shared/ui/redesigned/Stack'

type ArticleViewSelectorProps = {
  className?: string
  view: ArticleView
  onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.GRID,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => GridIcon,
      off: () => GridIconDeprecated,
    }),
  },
  {
    view: ArticleView.TEMPLATE,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => TemplateIcon,
      off: () => TemplateIconDeprecated,
    }),
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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card
          className={classNames(cls.ArticleViewSelectorRedesigned, {}, [
            className,
          ])}
          border='round'
          data-testid="ArticleViewSelector">
          <HStack gap='16'>
            {viewTypes.map(viewType => (
              <Icon
                key={viewType.view}
                clickable
                onClick={onSetView(viewType.view)}
                Svg={viewType.icon}
                className={classNames(
                  '',
                  { [cls.notSelected]: viewType.view !== view },
                  [className],
                )}
              />
            ))}
          </HStack>
        </Card>
      }
      off={
        <div
          className={classNames(cls.ArticleViewSelector, {}, [className])}
          data-testid="ArticleViewSelector">
          {viewTypes.map(viewType => (
            <ButtonDeprecated
              data-testid={`ArticleViewSelector.${viewType.view}`}
              key={viewType.view}
              onClick={onSetView(viewType.view)}
              theme={ButtonTheme.CLEAR}>
              <IconDeprecated
                width={24}
                height={24}
                Svg={viewType.icon}
                className={classNames(
                  '',
                  { [cls.notSelected]: viewType.view !== view },
                  [className],
                )}
              />
            </ButtonDeprecated>
          ))}
        </div>
      }
    />
  )
})
