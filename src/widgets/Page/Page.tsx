import {
  MutableRefObject, ReactNode, UIEvent, memo, useRef,
} from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { scrollPositionSaverActions } from '@/widgets/ScrollPositionSaver'
import { getScrollPostionDataByPath } from '@/widgets/ScrollPositionSaver/model/selectors/scrollPositionSelectors'
import { StateSchema } from '@/app/providers/StoreProvider'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle'
import cls from './Page.module.scss'

type PageProps = {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const currentScrollPosition = useSelector(
    (state: StateSchema) => getScrollPostionDataByPath(state, pathname),
  )

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  })

  const onScrollHandler = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(scrollPositionSaverActions.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: pathname,
    }))
  }, 500)

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = currentScrollPosition
  })

  return (
    <main onScroll={onScrollHandler} ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
      {children}
      {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
    </main>
  )
})
