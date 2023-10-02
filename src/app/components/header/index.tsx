/* eslint-disable @next/next/no-img-element */
import { type FC } from 'react';

const Header: FC = () => {
  return (
    <header className="flex flex-shrink-0 justify-center w-full bg-slate-800 text-white">
      <nav className="w-full flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <span className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </span>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <span className="text-sm font-semibold leading-6">
            Product
          </span>
          <span className="text-sm font-semibold leading-6">
            Features
          </span>
          <span className="text-sm font-semibold leading-6">
            Marketplace
          </span>
          <span className="text-sm font-semibold leading-6">
            Company
          </span>
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <span className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6">
            Log in
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
