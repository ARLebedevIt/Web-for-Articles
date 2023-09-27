import React, { ErrorInfo, ReactNode, Suspense } from 'react'
import { PageError } from '@/widgets/PageError'

interface ErrorBoundaryPropsType {
  children: ReactNode
}

interface ErrorBoundaryStateType {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryPropsType, ErrorBoundaryStateType> {
  constructor(props: ErrorBoundaryPropsType) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info)
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      return (
        <Suspense fallback={null}>
          <PageError />
        </Suspense>
      )
    }
    return children
  }
}

export default ErrorBoundary
