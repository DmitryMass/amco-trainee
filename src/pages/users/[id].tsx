import React, { FC } from 'react';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
//
import { UserService } from '@/services/userService';
import { TUser } from '@/types/userTypes';

const UserPage: FC<{ userData: TUser }> = ({ userData }) => {
  const router = useRouter();
  return (
    <div className='max-w-[576px] w-full mx-auto px-[10px] py-[30px] bg-gray-200 rounded-[4px] '>
      <button
        className='px-[10px] mb-[10px] py-[5px] rounded-[8px] bg-blue-500 text-white font-bold shadow-sm hover:shadow-md hover:scale-[1.03]  duration-75'
        onClick={() => router.back()}
      >
        Back
      </button>

      <div className='p-[20px] mx-auto shadow-md bg-white block rounded-[6px] border-[1px] border-gray-500 '>
        <h1 className='mb-[5px]'>
          {userData.firstName} {userData.lastName}
        </h1>
        <p className='mb-[5px]'>Email: {userData.email}</p>
        <p>Age: {userData.age}</p>
      </div>
    </div>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query } = context;
  const userData = await UserService.getUserData(query.id as string);

  if (!userData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { userData },
  };
};

export default UserPage;
