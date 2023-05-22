export const getPaginationData = (currentPage: number) => {
  const totalPages = 10;
  const pageNumbers: (string | number)[] = [];
  const addRange = (start: number, end: number) => {
    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }
  };

  if (currentPage <= 4) {
    addRange(1, 5);
    pageNumbers.push('...');
    pageNumbers.push(totalPages);
  } else if (currentPage >= totalPages - 3) {
    pageNumbers.push(1);
    pageNumbers.push('...');
    addRange(totalPages - 4, totalPages);
  } else {
    pageNumbers.push(1);
    pageNumbers.push('...');
    addRange(currentPage - 1, currentPage + 1);
    pageNumbers.push('...');
    pageNumbers.push(totalPages);
  }

  return { totalPages, pageNumbers };
};
