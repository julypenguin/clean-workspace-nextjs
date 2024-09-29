import React, { Component, ReactNode, ErrorInfo } from 'react'
import { reqIndexConfigjson } from '@common/apis'

interface ErrorBoundaryProps {
  /** Router Page */
  children: ReactNode
  /** 客製化 UI */
  fallback?: (props: ErrorBoundaryState) => ReactNode
}

export type ErrorBoundaryState = {
  error?: Error
  info?: ErrorInfo
}

/** 官方給的錯誤攔截 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { error: undefined, info: undefined }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error: error }
  }

  async componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ info: errorInfo })
    const errorMessage = String(`n:${error?.name}|m:${error?.message}|s:${errorInfo?.componentStack}`).slice(0, 2048)
    await reqIndexConfigjson.call({ autoCancel: false }, { 'error-message': errorMessage } as any) // 重定向到錯誤頁
  }

  render() {
    if (this.state?.error) {
      if (this.props.fallback) {
        return this.props.fallback({ ...this.state })
      }
      return (
        <div className="flex flex-col items-center py-48">
          <span>{this.state.error?.name || ''}</span>
          <span>{this.state.error?.message || ''}</span>
          <pre className="px-16 text-12">{this.state.error?.stack}</pre>
        </div>
      )
    }

    // 如果沒有錯誤，則返回子組件
    return this.props.children
  }
}

export default ErrorBoundary
