import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://elitespaces.org/"),
  title: "Elite Spaces",
  openGraph: {
    title: "Elite Spaces",
    images: [
      {
        url: "https://elitespaces.org/images/logom.png", // Updated path to images folder
        width: 1200,
        height: 630,
        alt: "Elite Spaces",
      },
    ],
    type: "website",
    url: "https://elitespaces.org/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Spaces",
    images: ["https://elitespaces.org/images/logom.png"], // Updated path to images folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-Jakarta antialiased`}>{children}</body>
    </html>
  );
}
