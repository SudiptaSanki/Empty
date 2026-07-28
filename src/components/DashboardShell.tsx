import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/", label: "Launch" },
  { href: "/market", label: "Market" },
  { href: "/student", label: "Student" },
  { href: "/company", label: "Company" },
  { href: "/assessment", label: "Arena" },
  { href: "/rankings", label: "Rankings" }
];

type DashboardShellProps = {
  children: ReactNode;
};

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="app-shell">
      <header className="topbar">
        <Link className="brand" href="/">
          <span className="brand__mark">SR</span>
          <span>
            <strong>ScoutRena</strong>
            <small>Talent Transfer Market</small>
          </span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="wallet-pill">
          <span>Demo Chain</span>
          <strong>0xSCOUT</strong>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
