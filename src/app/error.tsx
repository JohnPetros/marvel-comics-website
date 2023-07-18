'use client'
import { ErrorComponent } from './components/ErrorComponent'

interface ErrorProps {
  error: Error
  reset: VoidFunction
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <ErrorComponent
      title={`${error.name} ${error.message}`}
      message="Click on the Uatu's eye to try again"
      handler={reset}
    />
  )
}
