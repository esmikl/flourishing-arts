import type { Metadata } from "next";
import "./globals.css";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import Head from "next/head";

export const metadata: Metadata = {
  title: "Flourishing Arts",
  description: "Nurturing our community through the power of the arts.",
    keywords: ['Flourishing Arts', 'Eau Claire Wisconsin', 'Festival', 'Music Festival', 'Downtown Eau Claire', 'Arts', 'Music', 'Healing']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Head>
        <link rel="stylesheet" href="https://use.typekit.net/alm5vsf.css"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
    <body className="font-Termina">
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
              {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
