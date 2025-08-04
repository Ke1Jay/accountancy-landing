import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Professional Accounting Services | ACCOUNTANCY",
  description: "Trusted accounting services for individuals and businesses. Expert financial guidance, tax preparation, and bookkeeping solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="classic-original">
      <head>
        <script 
          dangerouslySetInnerHTML={{ 
            __html: `
              (function() {
                try {
                  if (typeof window === 'undefined') return;
                  
                  const theme = localStorage.getItem('theme') || 'classic-original';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'classic-original');
                }
              })();
            ` 
          }} 
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
