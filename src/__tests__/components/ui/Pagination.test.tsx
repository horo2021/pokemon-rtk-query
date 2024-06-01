import { render, fireEvent } from '@testing-library/react';
import Pagination from '../../../components/ui/Pagination';
import '@testing-library/jest-dom/extend-expect'


describe('Pagination Component', () => {
  test('renders pagination buttons and page numbers correctly', () => {
    
    const onPageChangeMock = jest.fn();

    
    const { getByText } = render(
      <Pagination currentPage={3} totalPages={5} onPageChange={onPageChangeMock} />
    );

    
    const prevButton = getByText('Previous');
    const nextPage = getByText('Next');
    const pageNumber = getByText('Page 3 of 5');

   
    expect(prevButton).toBeInTheDocument();
    expect(nextPage).toBeInTheDocument();
    expect(pageNumber).toBeInTheDocument();

    
    fireEvent.click(prevButton);
    fireEvent.click(nextPage);

    
    expect(onPageChangeMock).toHaveBeenCalledWith(2);
    expect(onPageChangeMock).toHaveBeenCalledWith(4);
  });
});
