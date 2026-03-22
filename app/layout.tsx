import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aura | Predictive Analytics for High-Frequency Trading",
  description: "Predict the invisible. Trade the future. Aura is a real-time predictive analytics engine for high-frequency traders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-obsidian-950 min-h-screen">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
