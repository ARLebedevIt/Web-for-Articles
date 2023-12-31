import React, { memo, useState } from 'react'
import { Icon as IconDeprecated } from '../Icon/Icon'
import StarIcon from '../../../assets/icons/deprecated/star.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './StarRating.module.scss'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import { Icon } from '../../redesigned/Icon'

type StarRatingProps = {
  className?: string
  onSelect?: (starsCount: number) => void
  size?: number
  selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

/**
 * Компонент устарел, новые компоненты в папке redesigned
 * @deprecated
 */
export const StarRating = memo((props: StarRatingProps) => {
  const { className, onSelect, selectedStars = 0, size = 30 } = props

  const [currentStarCount, setCurrentStarsCount] = useState(selectedStars)
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

  const onHover = (starsCount: number) => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount)
    }
  }

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0)
    }
  }

  const onClick = (starsCount: number) => {
    if (!isSelected) {
      onSelect?.(starsCount)
      setCurrentStarsCount(starsCount)
      setIsSelected(true)
    }
  }

  return (
    <div className={classNames(toggleFeatures({
      name: 'isAppRedesigned',
      on: () => cls.StarRatingRedesigned,
      off: () => cls.StarRating,
    }), {}, [className])}>
      {stars.map((starNumber) => {
        const commonProps = {
          'data-testid': `StarRating.${starNumber}`,
          width: size,
          height: size,
          className: classNames(
            cls.starIcon,
            {
              [cls.hovered]: Boolean(currentStarCount >= starNumber),
              [cls.selected]: isSelected,
            },
            [cls.normal],
          ),
          Svg: StarIcon,
          onMouseEnter: () => onHover(starNumber),
          onMouseLeave: onLeave,
          onClick: () => onClick(starNumber),
          key: starNumber,
        }
        return (
          <ToggleFeatures
            key={starNumber}
            feature='isAppRedesigned'
            on={
              <Icon clickable={!isSelected} {...commonProps} />
            }
            off={
              <IconDeprecated {...commonProps} />
            }
          />
        )
      })}
    </div>
  )
})
