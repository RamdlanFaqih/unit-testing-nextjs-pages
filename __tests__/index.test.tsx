import {fireEvent, render, screen} from '@testing-library/react'
import Home from '../src/pages/home/index'

it('Home Router : Works with client component', () => {
    render(<Home/>)
    expect(screen.getByRole('heading')).toHaveTextContent('0')
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('heading')).toHaveTextContent('1')
})