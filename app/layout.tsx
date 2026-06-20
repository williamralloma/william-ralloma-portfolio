import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profile } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description:
    "Technical support specialist with 10+ years across WordPress, DNS, email, and hosting infrastructure. I solve hosting problems before they become customer problems.",
  keywords: [
    "Technical Support",
    "WordPress",
    "Hosting",
    "DNS",
    "cPanel",
    "WooCommerce",
    "Email Deliverability",
  ],
  authors: [{ name: profile.fullName }],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description:
      "Technical support specialist across WordPress, DNS, email, and hosting infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
