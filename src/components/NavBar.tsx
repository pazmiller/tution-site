"use client"
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
// components/NavBar.tsx

const Navbar = () =>
{
    return (
        <nav>
            <div className="w-full flex justify-end lg:space-x-5 sm: space-x-2 bg-gray-800 text-white p-4">
                <Link href={"/"}>
                    Tution Center
                </Link>
                <Link href={"/"}>
                    Home
                </Link>
                <Link href={"/programmes"}>
                    Programmes
                </Link>
                <Link href={"/contact"}>
                    Contact Us
                </Link>
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;