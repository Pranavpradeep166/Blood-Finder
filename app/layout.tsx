import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blood Donor Finder",
  description: "Find suitable blood donors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="bg-black text-gray-900">
      
        {children}
      </body>
    </html>
  );
}
