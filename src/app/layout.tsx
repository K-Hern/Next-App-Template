import type { Metadata } from "next";
import { MyProvider } from "./context/MyContext";

export const metadata: Metadata = {
  title: "Next App Template",
  description: "A template for a new next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MyProvider>
          {children}
        </MyProvider>
      </body>
    </html>
  );
}
