'use client'
import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
    return (
        <div className='bg-gradient-to-r from-[#37E1E6] to-purple text-white'>
            <div className="navbar container mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <div className='flex items-center'>
                    <Image
                        className='w-20'
                        alt='logo image'
                        src={logo}
                    />
                    <h2 className='text-2xl font-bold'>Parcel <span className='text-[#2B3990]'>Pro</span></h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Item 1</a></li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href='/login' style={{boxShadow: '0 0 10px 3px rgba(196, 236, 251, 0.8)'}}  className=" bg-[#A0DEF5] px-4 py-2 rounded-md shadow-[0, 0, 10px, 4px] shadow-[#C4ECFB] hover:bg-purple text-black hover:text-white transition duration-300 ">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;