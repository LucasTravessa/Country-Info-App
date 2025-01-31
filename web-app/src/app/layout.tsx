import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import GlobalHeader from "./_components/GlobalHeader";
import { ThemeProvider } from "../components/theme-provider";

export const metadata: Metadata = {
  title: "Country Info App",
  description: "Full-Stack JS engineer test assessment",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="bg-background min-h-screen">
              <GlobalHeader />
              <main className="container mx-auto px-4 py-8">{children}</main>
            </div>
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
