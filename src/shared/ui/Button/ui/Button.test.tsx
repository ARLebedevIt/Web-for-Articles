import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button'

describe('custom button', () => {
  test('render in app', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  test('have theme class', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('clear')
  })
})
