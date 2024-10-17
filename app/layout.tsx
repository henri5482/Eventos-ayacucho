import { esES } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
const poppins =Poppins ({
  subsets:["latin"],
  weight:["400", "500", "600", "700" ],
  variable:"--font-poppins",
})

const customLocalization = {
  ...esES,
  signUp: {
    start: {
      subtitle: 'para acceder a {{applicationName}}',
    },
    emailCode: {
      subtitle: 'para acceder a {{applicationName}}'
    }
  }
}
export const metadata: Metadata = {
  title: "Eventos",
  description: "plataforma de eventos en ayacucho",
  icons:{
    icon:"public/assets/icons/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={customLocalization}>
    <html lang="es">
    <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Eventos</title>
          <meta name="description" content="plataforma de eventos en ayacucho" />
          <link rel="icon" href="/assets/icons/favicon.ico" />
        </head>
      <body className={poppins.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
