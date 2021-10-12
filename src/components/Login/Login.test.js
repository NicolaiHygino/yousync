import { render, screen } from '@testing-library/react';
import Login from '.';

describe('Login components', () => {
  it('renders a form', () => {
    render(<Login />);
    expect(screen.getByRole('form')).toBeInTheDocument();
  });
})