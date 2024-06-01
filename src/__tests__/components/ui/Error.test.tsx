import { render, screen } from '@testing-library/react';
import Error from '../../../components/ui/Error';
import '@testing-library/jest-dom/extend-expect'


test('renders error message', () => {
  render(<Error />);
  
 
  const errorMessage = screen.getByRole('alert');
  expect(errorMessage).toBeInTheDocument();

  
  expect(errorMessage).toHaveTextContent('Error: an Error Accured');
});
