import Link from "next/link";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '영화 위키',
  description: '일별 박스 오피스를 확인하고 영화 정보와 영화인 정보를 조회할 수 있습니다',
  openGraph: {
    title: '영화 위키',
    description: '일별 박스 오피스를 확인하고 영화 정보와 영화인 정보를 조회할 수 있습니다',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <nav className="flex justify-between w-[500px] mx-auto border-b py-4 mb-4">
          <Link href='/' className="font-bold">홈</Link>
          <Link href='/sign-in'>로그인</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
