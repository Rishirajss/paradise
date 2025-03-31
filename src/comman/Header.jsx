import React, { useState } from 'react'
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
        <header className="bg-menuBg text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-2xl font-bold">MyBrand</h1>
            
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#" className="hover:text-gray-200">Home</a>
                    <a href="#" className="hover:text-gray-200">Waterpark</a>
                    <a href="#" className="hover:text-gray-200">Tickets</a>
                    <a href="#" className="hover:text-gray-200">Food Menu</a>
                    <a href="#" className="hover:text-gray-200">Accommodation</a>
                    <a href="#" className="hover:text-gray-200">Events</a>
                    <a href="#" className="hover:text-gray-200">Contact us</a>
                    <button className="bg-white text-menuBg px-4 py-2 rounded-md">Login</button>
                </nav>
            
                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
      
            {/* Mobile Menu */}
            {isOpen && (
                <nav className="md:hidden bg-blue-700 p-4 mt-2 space-y-3">
                <a href="#" className="block hover:text-gray-200">Home</a>
                <a href="#" className="block hover:text-gray-200">About</a>
                <a href="#" className="block hover:text-gray-200">Services</a>
                <a href="#" className="block hover:text-gray-200">Contact</a>
                </nav>
            )}
        </header>    
    </>
  )
}
