"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/dinosaurios", label: "Dinosaurios" },
  { href: "/eras", label: "Eras" },
  { href: "/fosiles", label: "Fósiles" },
  { href: "/extincion", label: "Extinción" },
  { href: "/explorador", label: "Explorador" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-selva-900 text-crema-50 sticky top-0 z-50 shadow-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <span className="text-2xl">🦕</span>
          DinoMundo
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded-full px-3 py-1.5 text-sm transition-colors hover:bg-selva-700 ${
                  pathname === link.href ? "bg-selva-700 font-semibold" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden rounded-lg px-3 py-1.5 text-2xl hover:bg-selva-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {isOpen && (
        <ul className="md:hidden border-t border-selva-700 px-4 pb-4 pt-2 space-y-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-3 py-2 text-sm hover:bg-selva-700 ${
                  pathname === link.href ? "bg-selva-700 font-semibold" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
