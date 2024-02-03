import type { Metadata } from "next";
import { Noto_Sans_JP, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const noto = Noto_Sans_JP({ subsets: ["latin"], variable: "--noto" });
const pop = Poppins({weight: "500", subsets: ["latin"], variable: "--pop"});

export const metadata: Metadata = {
  title: "Kinro App",
  description: "次の金曜ロードショーの情報を見ることができます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${noto.variable} ${pop.variable}`}>
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
