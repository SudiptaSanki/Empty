import type { Metadata } from "next";
import { DashboardShell } from "@/components/DashboardShell";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScoutRena | AI-Powered Talent Transfer Market",
  description:
    "A Web3-inspired recruitment market where candidates have dynamic values, companies bid with Talent Tokens, and AI predicts future potential."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DashboardShell>{children}</DashboardShell>
      </body>
    </html>
  );
}
