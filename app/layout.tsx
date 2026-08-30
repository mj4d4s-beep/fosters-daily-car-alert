import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dealer and Facebook Listings for Foster’s Car Search",
  description: "Separately ranked dealer and Facebook Marketplace cars at $5,000 or less near Shutesbury and Amherst, Massachusetts.",
  openGraph: {
    title: "Dealer and Facebook Listings for Foster’s Car Search",
    description: "Dealer and Facebook Marketplace cars at $5,000 or less near Shutesbury and Amherst, MA — ranked separately for reliability and safety.",
    images: ["/fosters-car-alert-social.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
