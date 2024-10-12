import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <nav className="flex w-[500px] mx-auto border-b py-4 mb-4">
          <Link href='/' className="font-bold">홈</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
