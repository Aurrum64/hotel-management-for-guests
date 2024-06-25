import Logo from "@/app/_components/logo";
import Navigation from "@/app/_components/navigation";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "@/app/_components/header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | Hotel Management",
    default: "Welcome to Hotel Management",
  },
  description: "Some sort of description for SEO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} flex min-h-screen flex-col bg-primary-950 text-primary-100 antialiased`}
      >
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="mx-auto max-w-7xl">{children}</main>
        </div>
      </body>
    </html>
  );
}
