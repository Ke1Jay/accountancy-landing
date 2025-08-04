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
                  const customThemes = JSON.parse(localStorage.getItem('customThemes') || '[]');
                  
                  const customTheme = customThemes.find(t => t.id === theme);
                  if (customTheme) {
                    document.documentElement.removeAttribute('data-theme');
                    
                    const root = document.documentElement;
                    root.style.setProperty('--background', customTheme.colors.background);
                    root.style.setProperty('--foreground', customTheme.colors.foreground);
                    root.style.setProperty('--trust-blue', customTheme.colors.trustBlue);
                    root.style.setProperty('--financial-green', customTheme.colors.financialGreen);
                    root.style.setProperty('--professional-navy', customTheme.colors.professionalNavy);
                    root.style.setProperty('--light-blue', customTheme.colors.lightBlue);
                    root.style.setProperty('--light-green', customTheme.colors.lightGreen);
                    root.style.setProperty('--neutral-gray', customTheme.colors.neutralGray);
                  } else {
                    document.documentElement.setAttribute('data-theme', theme);
                  }
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
