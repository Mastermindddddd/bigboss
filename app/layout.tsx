import type { Metadata } from "next";
import "./globals.css";
import "./digital.css";
import "./digital-enhancements.css";
import "./digital-animation.css";
import "./studios.css";
import "./studio-refinements.css";
import "./hero-scenes.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import WhatsAppBtn from "./components/WhatsAppBtn";
import Script from "next/script";

export const metadata: Metadata = {
  title: "BigBoss Corporate Consulting | Organisation Transformation Solutions",
  description: "BigBoss Corporate Consulting — partnering with companies and governments across SADC to create jobs, build entrepreneurs, and drive growth and global competitiveness.",
  icons: {
    icon: "/icon.png", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-26B9WWR5XS"
  strategy="afterInteractive"
/>

<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-26B9WWR5XS');
  `}
</Script>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppBtn />
      </body>
    </html>
  );
}
