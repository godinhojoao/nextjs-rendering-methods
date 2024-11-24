import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Rendering Methods",
  description: "Next.js Rendering Methods",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
