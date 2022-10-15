import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { VscGlobe } from 'react-icons/vsc';
import { CgDollar } from 'react-icons/cg';
import { BiHelpCircle } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { classNames } from '../utils/helpers';

const URL = {
  HEADOUT_LOGO:
    '/headoutLogo.png',
  PROFILE_PICTURE: 'https://static.toiimg.com/photo/65675521.cms'
};

const CONTENT = {
  NAV_LINKS: {
    ENGLISH: 'English',
    USD: 'USD',
    HELP: 'Help'
  }
};

const navPages = [
  {
    label: 'Bestsellers',
    href: '/'
  },
  {
    label: 'Gallery',
    href: '/gallery'
  }
];

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className='flex flex-col gap-8 max-w-[1200px] mx-auto py-4 xl:px-0 px-4'>
        <Navbar />
        <NavLinks />
      </div>
      <div className='max-w-[1200px] mx-auto xl:px-0 px-4'>{children}</div>
    </>
  );
};

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <Link href='/'>
        <img src={URL.HEADOUT_LOGO} alt='headout-logo' width={185} style={{cursor:'pointer'}} />
      </Link>
      <div className='flex gap-8 items-center'>
        <IconTitle Icon={VscGlobe} title={CONTENT.NAV_LINKS.ENGLISH} />
        <IconTitle Icon={CgDollar} title={CONTENT.NAV_LINKS.USD} />
        <IconTitle Icon={BiHelpCircle} title={CONTENT.NAV_LINKS.HELP} />
        <img
          src={URL.PROFILE_PICTURE}
          alt='profile-pic'
          className='h-[40px] w-[40px] border rounded-full object-cover'
        />
      </div>
    </div>
  );
};

const IconTitle = ({ Icon, title }: { Icon: IconType; title: string }) => {
  return (
    <div className='flex text-gray-500 text-sm items-center font-light'>
      <Icon />
      <div className='ml-1'>{title}</div>
    </div>
  );
};

const NavLinks = () => {
  const { pathname } = useRouter();

  return (
    <div className='flex justify-start items-center gap-4 text-gray-500 font-light'>
      <div className='flex items-center'>
        <AiOutlineMenu />
        <div className='ml-2'>All Categories</div>
      </div>
      {navPages.map(({ label, href }) => (
        <Link href={href} key={href} passHref>
          <a
            className={classNames(
              pathname === href ? 'bg-gray-200 text-gray-900 rounded-md' : '',
              'px-4 py-2 transition-colors duration-200 ease-in-out hover:bg-gray-100 hover:text-gray-600 rounded-md'
            )}
          >
            {label}
          </a>
        </Link>
      ))}
    </div>
  );
};
