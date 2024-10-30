import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cryptocurrency Prices by Market Cap | CoinLore",
  description:
    "Cryptocurrency prices, stats, historical price movements, charts. Check data from more than 11,000 crypto coins and tokens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-light-background text-light-foreground antialiased dark:bg-dark-background dark:text-dark-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
