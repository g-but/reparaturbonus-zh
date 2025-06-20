import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SessionProviderWrapper from "@/components/providers/session-provider";
import RepairChat from "@/components/ui/AiChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reparaturbonus Zürich - Reparieren statt wegwerfen",
  description: "Finden Sie die beste Werkstatt in Zürich und nutzen Sie CHF 100 Reparaturbonus der Stadt. Nachhaltig, günstig und umweltfreundlich.",
  icons: {
    icon: [
      { url: "/logo/favicon_emblem_final (1).ico", sizes: "any" },
      { url: "/logo/favicon_emblem_final_16 (1).png", type: "image/png", sizes: "16x16" },
      { url: "/logo/favicon_emblem_final_48 (1).png", type: "image/png", sizes: "48x48" },
    ],
    shortcut: "/logo/favicon_emblem_final (1).ico",
    apple: "/logo/favicon_emblem_final_48 (1).png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <SessionProviderWrapper>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-16">
              {children}
            </main>
            <Footer />
          </div>
          <RepairChat />
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
