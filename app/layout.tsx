import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Foster’s Daily Car Alert",
  description: "Ranked dealer listings under $6,000 near Leverett, Massachusetts.",
  openGraph: {
    title: "Foster’s Daily Car Alert",
    description: "Eight dealer cars under $6,000 near Leverett, MA — ranked for a first-time driver.",
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
