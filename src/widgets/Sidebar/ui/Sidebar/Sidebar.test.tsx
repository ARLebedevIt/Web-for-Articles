import { fireEvent, screen } from '@testing-library/react'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { Sidebar } from '../Sidebar/Sidebar'

describe('Sidebar tests', () => {
  test('render in app', () => {
    componentRender(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('open/close sidebar', () => {
    componentRender(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar_toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
