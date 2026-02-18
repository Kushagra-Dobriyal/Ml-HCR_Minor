import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"; 

export function Footer() {
  return (
   <div id="contact">
     <footer className="relative w-full bg-gradient-to-br from-gray-400 via-gray-600 to-gray-800 text-white overflow-hidden py-12 md:py-20 border-t border-neutral-800">
      
      
      <div className="absolute -bottom-10 left-0 z-0 pointer-events-none select-none">
        <h1 className="text-[12rem] md:text-[20rem] font-bold text-white/[0.02] leading-none tracking-tighter">
            ImDoc
        </h1>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          
          {/* 2. Logo & Copyright Section (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              {/* Logo Icon */}
              <div className="bg-white text-black p-1 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.949 49.949 0 0 0-9.902 3.912l-.003.002-.34.18a.75.75 0 0 1-.707 0A50.009 50.009 0 0 0 7.5 12.174v-.224c0-.131.067-.248.182-.311a51.02 51.02 0 0 1 2.313-.531.75.75 0 1 0-.318-1.465 49.52 49.52 0 0 0-1.767.408l-.558.14a.8.8 0 0 1-.397 0l-.558-.14a50.012 50.012 0 0 0-3.153-.704.75.75 0 0 1-.58-.737V8.718c0-.422.28-.792.684-.897A59.77 59.77 0 0 1 11.7 2.805Z" />
                  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 0 1-.46.71 47.878 47.878 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.877 47.877 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 0 1 6 13.18v1.27a.75.75 0 0 1-.14.416 47.25 47.25 0 0 0-1.127 1.458.75.75 0 1 0 1.25.86c.216-.312.42-.63.612-.953a.75.75 0 0 1 .64-.393h.001a50.04 50.04 0 0 0 5.824 1.636Z" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-wide">ImDoc</span>
            </Link>
            
            <p className="text-neutral-500 text-sm max-w-xs leading-relaxed">
              © copyright  2024. All rights reserved.
            </p>
          </div>

          {/* 3. Navigation Columns */}
          {/* Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Pages</h3>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li><Link href="#" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Studio</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Clients</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Socials</h3>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors flex items-center gap-2">
                 Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors flex items-center gap-2">
                 Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors flex items-center gap-2">
                 Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors flex items-center gap-2">
                 LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Register */}
          

        </div>
      </div>
    </footer>
   </div>
  );
}