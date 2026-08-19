import type { Metadata } from "next";
import "@/shared/assets/globals.css";
import { geistSans, geistMono } from "@/shared/utils/fonts";

export const metadata: Metadata = {
  title: {
    default: "Sanity Protector",
    template: "%s | Sanity Protector",
  },
  description:
    "Proactively surfaces past Notion pages that match problems you've already solved.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
