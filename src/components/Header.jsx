import { useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Image } from "@nextui-org/react";
import { IoMenu } from "react-icons/io5";
import logo from '../assets/cca-logo.png'
import {Avatar} from "@nextui-org/react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar className='bg-green-[#8asfs2] text-white' onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarBrand>
                    <Image height={45} width={45} alt='cca' src={logo} />
                    <p className="text-white font-semibold ">Coding club</p>
                </NavbarBrand>
            </NavbarContent>
            {/* items for larger screens */}
            <NavbarContent className="hidden sm:flex gap-4 " justify="center" >
                <NavbarItem>
                    <Link className='text-white' href="/">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className='text-white' href="/eagle-bot">
                        Eagle bot
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link className='text-white' href="/flip-cards" >
                        flip cards
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/about-us" className='text-white'>
                        About us
                    </Link>

                </NavbarItem>
                <NavbarItem>
    
                          <Avatar src={logo} />

                </NavbarItem>
            </NavbarContent>

            <NavbarContent className='flex ' style={{ justifyContent: 'end' }}>
                <NavbarMenuToggle
                    icon={<IoMenu size={32} color='white' />}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className=" sm:hidden w-8"
                >
                </NavbarMenuToggle>

            </NavbarContent>
            <NavbarMenu>
                <NavbarMenuItem >
                    <Link
                        className="w-full"
                        href="/"
                    >
                        Home
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem >
                    <Link href="/eagle-bot">
                        Eagle bot
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem >
                    <Link href="/flip-cars" aria-current="page">
                        flip cards
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem >
                    <Link href="/about-us" aria-current="page">
                        About us
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar >
    );
}
export default Header