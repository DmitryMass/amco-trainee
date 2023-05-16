import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
//
import { getPaginationData } from '@/utils/usersPaginationCalc';

export const Pagination = () => {
  const router = useRouter();
  const currentPage = parseInt(router.query.page as string) || 1;
  const { pageNumbers, totalPages } = getPaginationData(currentPage);

  return (
    <div className='flex justify-center items-center gap-[10px] py-[20px]'>
      <Link href={`/users?page=${currentPage - 1}`} passHref>
        <button
          disabled={currentPage === 1}
          className={`text-white flex items-center justify-center w-[30px] h-[25px] px-[10px] py-[5px] shadow-md cursor-pointer rounded-md text-sm font-semibold hover:scale-[1.03] ${
            currentPage === 1 ? 'bg-gray-400' : 'bg-gray-600'
          }`}
        >
          {'<'}
        </button>
      </Link>
      {pageNumbers.map((pageNumber, index) => {
        if (pageNumber === '...') {
          return (
            <span
              className='text-white flex items-center justify-center w-[30px] h-[25px] px-[10px] py-[5px] shadow-md rounded-md bg-gray-600 text-[12px] font-semibold cursor-pointer'
              key={index}
            >
              ...
            </span>
          );
        } else {
          return (
            <Link
              href={`/users?page=${pageNumber}`}
              className={`text-white flex items-center justify-center w-[30px] h-[25px] px-[10px] py-[5px] shadow-md cursor-pointer rounded-md text-sm font-semibold hover:scale-[1.03] ${
                pageNumber === currentPage ? 'bg-gray-400' : 'bg-gray-600'
              }`}
              key={index}
            >
              {pageNumber}
            </Link>
          );
        }
      })}
      <Link href={`/users?page=${currentPage + 1}`} passHref>
        <button
          disabled={currentPage === totalPages}
          className={`text-white flex items-center justify-center w-[30px] h-[25px] px-[10px] py-[5px] shadow-md cursor-pointer rounded-md text-sm font-semibold hover:scale-[1.03] ${
            currentPage === totalPages ? 'bg-gray-400' : 'bg-gray-600'
          }`}
        >
          {'>'}
        </button>
      </Link>
    </div>
  );
};
