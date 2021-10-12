import { render, screen } from '@testing-library/react';
import Login from '.';

describe('Login components', () => {
  it('renders a form', () => {
    render(<Login />);
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('renders a username input field', () => {
    render(<Login />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });

  it('renders a Room Code input field', () => {
    render(<Login />);
    expect(screen.getByLabelText('Room Code')).toBeInTheDocument();
  });

  it('renders a submit button', () => {
    render(<Login />);
    expect(screen.getByText('Enter')).toBeInTheDocument();
  });
});
