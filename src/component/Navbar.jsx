
import React, { useEffect, useState, } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const menuItems = [
    {
        name: 'Home',
       href: '/',
    },
    {
        name: 'About us',
        href: '/aboutus',
    },
    {
        name: 'Contact us',
        href: '/contactus',
    },
]

export function NavbarOne() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const [name, setname] = useState("Login");



    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(()=>{
        console.log("Use effect is called")
    },[name])
   

    return (
        <div className="relative w-full h-15 bg-transparent rounded">
            <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                <div className="inline-flex items-center space-x-2 font-bold">
                    <span>
                        Logo
                    </span>

                </div>
                <div className="hidden lg:block ml-28">
                    <ul className="inline-flex space-x-8 gap-10  ">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="text-sm font-semibold text-gray-800   hover:bg-slate-300 p-2 rounded "
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

     
                <div className="hidden lg:block">
                    <button onClick={()=>{
                       name === "login"? setname("logout") : setname("login")
                     
                    }} 
                        type="button"
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >{name}
                    </button>
                </div>
                <div className="lg:hidden">
                    <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                </div>
       
                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pb-6 pt-5">
                                <div className="flex items-center justify-between">
                                    <div className="inline-flex items-center space-x-2">
                                        <span>
                                 Logo
                                        </span>
                                     
                                    </div>
                                    <div className="-mr-2">
                                        <button
                                            type="button"
                                            onClick={toggleMenu}
                                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <X className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-4">
                                        {menuItems.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                                            >
                                                <span className="ml-3 text-base font-medium text-gray-900">
                                                    {item.name}
                                                </span>
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                                <button
                                    type="button"
                                    className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                  Login
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
