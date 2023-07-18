'use client'
import { ErrorComponent } from '../components/ErrorComponent'

interface ErrorProps {
  error: Error
}

export default function Error({ error }: ErrorProps) {
  return (
    <ErrorComponent
      title={`404 No characters found`}
      message="Try to click on the Uatu's eye to go back"
      handler={null}
    />
  )
}
