"use client"

import { UserButton, auth } from "@clerk/nextjs";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import IdeasGeneratorButton from "./forms/ideas-generator-button";

type Props = {
  userLoggedIn: boolean
}
export default function NavMenu({ userLoggedIn }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathName = usePathname()

  const menuItems = [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "Ideas",
      href: "/ideas"
    },
    {
      name: "Generate",
      href: "/generate"
    }
  ];

  return (

    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full" isBordered >
      <NavbarContent justify="start">
        <NavbarBrand className="flex-grow-0 me-10">
          <Link href="/" title="Workend">
            <h1 className="text-2xl font-medium">Workend</h1>
          </Link>
        </NavbarBrand>
        <div className="hidden sm:flex gap-4">
          {menuItems.map((item, index) => (
            <NavbarItem isActive={item.href === pathName} key={index} aria-current={item.href === pathName ? "page" : undefined}>
              <Link color={item.href === pathName ? "primary" : "foreground"} href={item.href} title={item.name}>
                {item.name}
              </Link>
            </NavbarItem>

          ))}
        </div>
      </NavbarContent>

      <NavbarContent justify="end">
        {userLoggedIn ? (
          <Fragment>
            <NavbarItem className="hidden sm:flex">
              <IdeasGeneratorButton />
            </NavbarItem>
            <NavbarItem className="hidden sm:flex">
              <UserButton afterSignOutUrl='/sign-in' />
            </NavbarItem>
          </Fragment>
        ) : (
          <Fragment>
            <NavbarItem className="hidden sm:flex">
              <Link href="/sign-in" title="Login">Login</Link>
            </NavbarItem>
            <NavbarItem className="hidden sm:flex">
              <Button as={Link} title="Sign up" color="primary" href="/sign-up" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </Fragment>
        )}

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      {/* mobile menu */}
      <NavbarMenu>
        {userLoggedIn ? (
          <NavbarMenuItem>
            <IdeasGeneratorButton />
          </NavbarMenuItem>
        ) : (
          <Fragment>
            <NavbarMenuItem>
              <Button className="w-full" title="Login" as={Link} color="primary" href="/login" variant="flat">
                Login
              </Button>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Button className="w-full" title="Sign up" as={Link} color="primary" href="/signup" variant="flat">
                Sign Up
              </Button>
            </NavbarMenuItem>
          </Fragment>
        )}
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color={item.href === pathName ? "primary" : "foreground"} href={item.href} title={item.name} className="w-full" size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>

  );
}
