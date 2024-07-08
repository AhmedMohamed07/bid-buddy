import { auth } from '@/auth';
import { SignIn } from '@/components/sign-in';
import { SignOut } from '@/components/sign-out';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = async () => {
  const session = await auth();

  return (
    <div className="py-2 bg-gray-200">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-12">
          <Link
            href={'/'}
            className="flex items-center gap-1 hover:underline hover:font-bold"
          >
            <Image src="/logo.png" width={50} height={50} alt="logo" />
            BidBuddy.com
          </Link>

          <div className="flex items-center">
            <Link
              href={'/bids/create'}
              className="flex items-center gap-1 hover:underline hover:font-bold"
            >
              Auction an Item
            </Link>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          {session?.user?.name}
          {session ? <SignOut /> : <SignIn />}
        </div>
      </div>
    </div>
  );
};

export default Header;
