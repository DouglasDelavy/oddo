import { Roboto } from "@next/font/google";

import "@/styles/globals.css";
import "@/styles/prism-atom-dark.css";

import { i18n } from "../../i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const RobotoFont = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-robot",
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <head />
      <body
        className={`${RobotoFont.variable} font-sans bg-zinc-800 text-xs text-neutral-200`}
      >
        {children}
      </body>
    </html>
  );
}
