"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { ShoppingBag, Search } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import {SignedIn, SignedOut, UserButton, SignInButton, SignUpButton,} from "@clerk/nextjs";
import SearchModal from "./SearchModal";

const links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Teens", href: "/Teens" },
  { name: "Electronics", href: "/Electronics" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="mb-8 border-b mt-0">
        <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
          <Link href="/">
            <h1 className="text-2xl md:text-4xl font-bold">
              Shop<span className="text-primary">ify</span>
            </h1>
          </Link>

          <nav className="hidden gap-12 lg:flex 2xl:ml-16">
            {links.map((link, idx) => (
              <div key={idx}>
                {pathname === link.href ? (
                  <Link className="text-lg font-semibold text-primary" href={link.href}>
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link className="text-lg font-semibold text-primary border-b-2 border-primary" href={link.href}>
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary hover:border-b-2 hover:border-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

          <div className="flex items-center gap-4 mt-0">
            {}
            <Button
              onClick={() => setIsSearchOpen(true)}
              className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none hover:bg-sky-300 text-grey-500 mt-0"
            >
              <Search className="w-6 h-6 sm:w-8 sm:h-8" />
              <span className="hidden text-xs font-semibold text-black sm:block">
                Search
              </span>
            </Button>

            {/* Cart Button */}
            <Button
              variant={"outline"}
              onClick={() => handleCartClick()}
              className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
            >
              <ShoppingBag />
              <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                Cart
              </span>
            </Button>

            <SignedOut>
              <SignInButton>
                <button className="text-black bg-green-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="text-black bg-green-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Register
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          <SignedOut>
            <SignInButton>
              <button className="text-black bg-green-500 hover:bg-green-600 hover:text-white sm:px-3 px-1 py-2 rounded-md md:text-sm text-xs font-medium">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="text-black bg-green-500 hover:bg-green-600 hover:text-white sm:px-3 px-1 py-2 rounded-md md:text-sm text-xs font-medium">
                Register
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
