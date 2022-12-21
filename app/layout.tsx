import { Roboto } from "@next/font/google";

import "@/styles/globals.css";
import "@/styles/prism-atom-dark.css";

const RobotoFont = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-robot",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${RobotoFont.variable} font-sans bg-zinc-800 text-xs text-neutral-200`}
      >
        {children}
      </body>
    </html>
  );
}
