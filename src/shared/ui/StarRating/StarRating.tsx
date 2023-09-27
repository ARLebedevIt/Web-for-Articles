import React, { memo, useState } from 'react'
import { Icon } from '../Icon/Icon'
import StarIcon from '../../assets/icons/star.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './StarRating.module.scss'

type StarRatingProps = {
  className?: string
  onSelect?: (starsCount: number) => void
  size?: number
  selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

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
    <div className={classNames(cls.StarRating, {}, [className])}>
      {stars.map(starNumber => (
        <Icon
          data-testid={`StarRating.${starNumber}`}
          width={size}
          height={size}
          className={classNames(cls.starIcon,
            {
              [cls.hovered]: Boolean(currentStarCount >= starNumber),
              [cls.selected]: isSelected,
            },
            [cls.normal],
          )}
          Svg={StarIcon}
          onMouseEnter={() => onHover(starNumber)}
          onMouseLeave={onLeave}
          onClick={() => onClick(starNumber)}
          key={starNumber}
        />
      ))}
    </div>
  )
})
