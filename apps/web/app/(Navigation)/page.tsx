"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";

export function NavbarDemo() {
  const navItems = [
    { name: "Learn More", link: "/" },
    { name: "Pricing", link: "#pricing" },
    { name: "Contact", link: "#contact", },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="absolute w-full">
      <Navbar>
        
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          
          <div className="flex items-center gap-4">
            <SignedOut>
             
              <SignInButton mode="modal" forceRedirectUrl="/dashboard/image_exp">
                <NavbarButton as="button" variant="secondary">Login</NavbarButton>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <SignOutButton>
                <NavbarButton as="button" variant="primary">Logout</NavbarButton>
              </SignOutButton>
            </SignedIn>
          </div>
        </NavBody>

        {/* --- MOBILE NAVIGATION --- */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}

            <SignedIn>
              <div className="flex w-full flex-col gap-4">
                <SignOutButton>
                  <NavbarButton
                    as="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    variant="primary"
                    className="w-full"
                  >
                    Logout
                  </NavbarButton>
                </SignOutButton>
              </div>
            </SignedIn>

            <SignedOut>
              <div className="flex w-full flex-col gap-4">
                 {/* FIX 2: Added forceRedirectUrl="/home" here too */}
                 <SignInButton mode="modal" forceRedirectUrl="/dashboard/image_exp">
                    <NavbarButton 
                      as="button"
                      onClick={() => setIsMobileMenuOpen(false)}
                      variant="secondary"
                      className="w-full"
                    >
                      Login
                    </NavbarButton>
                 </SignInButton>
              </div>
            </SignedOut>
          
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}