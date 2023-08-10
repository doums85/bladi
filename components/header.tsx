'use client';

import Image from 'next/image';
import { Button, Navbar, Flowbite } from 'flowbite-react';
import { usePathname } from 'next/navigation';

import { menu } from '@/constants';
import { MenuItem } from '@/constants/menu';
import theme from '@/theme';

export default function Header() {
  const pathname = usePathname();

  return (
    <Flowbite theme={{ theme }}>
      <Navbar className="mx-auto max-w-screen-xl px-4" rounded>
        <Navbar.Brand href="/">
          <img
            alt="Flowbite React Logo"
            className="mr-3 h-20 md:h-24"
            src="/images/logo.png"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button gradientMonochrome="success">
            <div className="flex justify-center items-center gap-2">
              <Image
                src="/whatsapp.svg"
                alt="icon whatsapp"
                width={24}
                height={24}
              />
              Appel WhatsApp
            </div>
          </Button>
          <Navbar.Toggle
            barIcon={() => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-layout-grid">
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
            )}
          />
        </div>
        <Navbar.Collapse>
          {/* 
          FIXME on mobile show full bg color to nav active
          */}
          {menu.map(({ name, link }: MenuItem) => {
            const isActive =
              (pathname.includes(link) && link.length > 1) || pathname === link;

            return (
              <Navbar.Link key={name} active={isActive} href={link}>
                {name}
              </Navbar.Link>
            );
          })}
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  );
}
