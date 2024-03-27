"use client"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import IdeasGeneratorButton from "./forms/ideas-generator-button";


export default function NavMenu() {
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
        <NavbarItem>
          <IdeasGeneratorButton />
        </NavbarItem>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      {/* mobile menu */}
      <NavbarMenu>

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
