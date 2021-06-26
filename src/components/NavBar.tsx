import React from 'react';
import Link from 'next/link';

export const NavBar = () => {
  return (
    <div className="top-0 w-full flex flex-row justify-center">
      <div className="container flex flex-col px-8 py-4 w-full max-w-xl text-sm md:text-lg">
        <div className="flex flex-row justify-between content-center">
          <Link href="/">
            <a className="font-medium">{'Standings'}</a>
          </Link>
          <Link href="/knockouts">
            <a className="font-medium">{'Knockouts'}</a>
          </Link>
          <Link href="/group-play">
            <a className="font-medium">{'Group Play'}</a>
          </Link>
        </div>
        <div className="h-1 w-full bg-gray-200 rounded-lg my-2" />
      </div>
    </div>
  );
};
