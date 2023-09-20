import { MutableRefObject, useEffect, useRef } from 'react'

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({ triggerRef, wrapperRef, callback }: UseInfiniteScrollOptions) {
  useEffect(() => {
    const wrapperElem = wrapperRef.current
    const triggerElem = triggerRef.current
    let observer: IntersectionObserver | null = null
    if (callback) {
      const options = {
        root: wrapperElem,
        rootMargin: '0px',
        threshold: 1.0,
      }
      observer = new IntersectionObserver(([enrty]) => {
        if (enrty.isIntersecting) {
          callback()
        }
      }, options)

      observer.observe(triggerElem)
    }
    return () => {
      if (observer) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(triggerElem)
      }
    }
  }, [callback, triggerRef, wrapperRef])
}
