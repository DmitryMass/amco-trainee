import React, { FC } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
//
import type { UserData } from '@/types/userTypes';
import { getUserData } from '@/utils/usersUtils';

type UserPageProps = {
  userData: UserData;
};

export const getServerSideProps: GetServerSideProps<UserPageProps> = async (
  ctx
) => {
  const userData = await getUserData(ctx.query.id as string);

  if (!userData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { userData },
  };
};

const UserPage: FC<UserPageProps> = ({ userData }) => {
  const router = useRouter();
  return (
    <div className='max-w-[576px] w-full mx-auto px-[10px] py-[30px] bg-gray-200 rounded'>
      <button
        className='px-[10px] mb-[10px] py-[5px] rounded-lg bg-blue-500 text-white font-bold shadow-sm hover:shadow-md hover:scale-[1.03] duration-75'
        onClick={() => router.back()}
      >
        Back
      </button>
      <div className='p-[20px] mx-auto shadow-md bg-white block rounded-md border-[1px] border-gray-500'>
        <h1 className='mb-[5px]'>
          {userData.firstName} {userData.lastName}
        </h1>
        <p className='mb-[5px]'>Email: {userData.email}</p>
        <p>Age: {userData.age}</p>
      </div>
    </div>
  );
};

export default UserPage;
