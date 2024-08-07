import { KasadaClient } from "@/utils/kasada/kasada-client";
import "./globals.css";
import { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-sdk-preview-attachments.vercel.app"),
  title: "Attachments Preview",
  description: "Experimental preview of attachments in useChat hook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <KasadaClient />
        <Toaster position="top-center" richColors />
        {children}
      </body>
    </html>
  );
}
