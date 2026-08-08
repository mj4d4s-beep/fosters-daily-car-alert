import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Foster’s Daily Car Alert",
  description: "Ranked dealer listings at $5,000 or less near Leverett, Massachusetts.",
  openGraph: {
    title: "Foster’s Daily Car Alert",
    description: "Dealer cars at $5,000 or less near Leverett, MA — ranked first for reliability and safety.",
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
