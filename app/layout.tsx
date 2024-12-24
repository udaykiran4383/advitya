import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Advitya 2025 | Prism of Possibilities",
  description:
    "Experience Advitya 2025, the social fest of IIT Bombay, celebrating societal aspirations and innovation. Join us in shaping a better tomorrow!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/jsm-logo.png" sizes="any" />

        {/* Metadata */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Abhyuday, IIT Bombay" />
        <meta
          name="keywords"
          content="Advitya 2025, IIT Bombay, social fest, societal innovation, inclusivity, sustainability"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Tags for Social Sharing */}
        <meta
          property="og:title"
          content="Advitya 2025 | Prism of Possibilities"
        />
        <meta
          property="og:description"
          content="Experience Advitya 2025, the social fest of IIT Bombay, celebrating societal aspirations and innovation. Join us in shaping a better tomorrow!"
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://advitya.iitb.ac.in" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Advitya 2025 | Prism of Possibilities"
        />
        <meta
          name="twitter:description"
          content="Join the journey of societal betterment at Advitya 2025, the social fest of IIT Bombay."
        />
        <meta name="twitter:image" content="/twitter-card.png" />

        {/* Structured Data for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Advitya 2025 | Prism of Possibilities",
              description:
                "Advitya 2025, the social fest of IIT Bombay, is a celebration of societal aspirations and innovation, emphasizing inclusivity and sustainability.",
              startDate: "2025-02-01T09:00:00+05:30",
              endDate: "2025-02-02T18:00:00+05:30",
              eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",
              eventStatus: "https://schema.org/EventScheduled",
              location: {
                "@type": "Place",
                name: "IIT Bombay",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Powai",
                  addressLocality: "Mumbai",
                  addressRegion: "Maharashtra",
                  postalCode: "400076",
                  addressCountry: "IN",
                },
              },
              organizer: {
                "@type": "Organization",
                name: "Abhyuday, IIT Bombay",
                url: "https://advitya.iitb.ac.in",
              },
              image: "/og-image.png",
              url: "https://advitya.iitb.ac.in",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
