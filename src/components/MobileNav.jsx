'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link'; // Use Next.js Link component for navigation
import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';

const link = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'work',
    path: '/work',
  },
  {
    name: 'contact',
    path: '/contact',
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-violet-500" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Nont<span className="text-violet-500">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {link.map((item, index) => {
            return (
              <Link
                href={item.path}
                key={index}
                className={`${
                  item.path === pathname
                    ? 'text-violet-500 border-b-2 border-violet-500'
                    : ''
                } text-xl capitalize hover:text-violet-500 transition-all`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
