import { render, screen } from '@testing-library/react';
import App from '../Components/App';

test('renders raghav', () => {
  render(<App />);
  const linkElement = screen.getByText(/raghav/i);
  expect(linkElement).toBeInTheDocument();
});
