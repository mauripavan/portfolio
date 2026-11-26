import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mauriciopavan.vercel.app"),
  title: "Mauricio Pavan, Product Engineer",
  description:
    "Product Engineer from Buenos Aires building web and mobile products end to end with React, Next.js and React Native.",
  openGraph: {
    title: "Mauricio Pavan, Product Engineer",
    description: "Web and mobile products, from architecture to the App Store and Play Store.",
    images: ["/mauricio.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
