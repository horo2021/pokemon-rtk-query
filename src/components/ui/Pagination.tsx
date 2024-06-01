import React from 'react';
import Button from './Button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const prevPage = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  const nextPage = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  return (
    <div className="flex justify-between items-center mt-4 mb-4">
      <Button onClick={prevPage} disabled={currentPage === 1}>Previous</Button>
      <div className="text-gray-700">{`Page ${currentPage} of ${totalPages}`}</div>
      <Button onClick={nextPage} disabled={currentPage === totalPages}>Next</Button>
    </div>
  );
};

export default Pagination;
