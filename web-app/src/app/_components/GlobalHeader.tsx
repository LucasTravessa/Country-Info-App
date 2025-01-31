import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./ThemeToggle";

export default function GlobalHeader() {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex flex-row justify-between px-4 py-4">
        <Link href="/" className="text-xl font-semibold">
          Country Info App
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
