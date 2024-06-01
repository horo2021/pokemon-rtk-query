import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 

import Loading from '../../../components/ui/Loading';

test('renders loading spinner', () => {
  render(<Loading />);
  

  const loadingSpinner = screen.getByTestId('loading-spinner');
  expect(loadingSpinner).toBeInTheDocument();
});
